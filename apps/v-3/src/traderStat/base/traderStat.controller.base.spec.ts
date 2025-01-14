import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TraderStatController } from "../traderStat.controller";
import { TraderStatService } from "../traderStat.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  monthlyPnl: 42.42,
  monthlyPnlRate: 42.42,
  monthlyR: 42.42,
  monthlyRoi: 42.42,
  monthlyWinRate: 42.42,
  pnl: 42.42,
  pnlRate: 42.42,
  rate: 42,
  riskScore: 42,
  statAt: new Date(),
  winRate: 42.42,
};
const CREATE_RESULT = {
  id: "exampleId",
  monthlyPnl: 42.42,
  monthlyPnlRate: 42.42,
  monthlyR: 42.42,
  monthlyRoi: 42.42,
  monthlyWinRate: 42.42,
  pnl: 42.42,
  pnlRate: 42.42,
  rate: 42,
  riskScore: 42,
  statAt: new Date(),
  winRate: 42.42,
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    monthlyPnl: 42.42,
    monthlyPnlRate: 42.42,
    monthlyR: 42.42,
    monthlyRoi: 42.42,
    monthlyWinRate: 42.42,
    pnl: 42.42,
    pnlRate: 42.42,
    rate: 42,
    riskScore: 42,
    statAt: new Date(),
    winRate: 42.42,
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  monthlyPnl: 42.42,
  monthlyPnlRate: 42.42,
  monthlyR: 42.42,
  monthlyRoi: 42.42,
  monthlyWinRate: 42.42,
  pnl: 42.42,
  pnlRate: 42.42,
  rate: 42,
  riskScore: 42,
  statAt: new Date(),
  winRate: 42.42,
};

const service = {
  createTraderStat() {
    return CREATE_RESULT;
  },
  traderStats: () => FIND_MANY_RESULT,
  traderStat: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("TraderStat", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TraderStatService,
          useValue: service,
        },
      ],
      controllers: [TraderStatController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /traderStats", async () => {
    await request(app.getHttpServer())
      .post("/traderStats")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        statAt: CREATE_RESULT.statAt.toISOString(),
      });
  });

  test("GET /traderStats", async () => {
    await request(app.getHttpServer())
      .get("/traderStats")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          statAt: FIND_MANY_RESULT[0].statAt.toISOString(),
        },
      ]);
  });

  test("GET /traderStats/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/traderStats"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /traderStats/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/traderStats"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        statAt: FIND_ONE_RESULT.statAt.toISOString(),
      });
  });

  test("POST /traderStats existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/traderStats")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        statAt: CREATE_RESULT.statAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/traderStats")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
