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
import { TraderSetupPnlPerformanceController } from "../traderSetupPnlPerformance.controller";
import { TraderSetupPnlPerformanceService } from "../traderSetupPnlPerformance.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  estimatedPnl: 42.42,
  estimatedPnlRate: 42.42,
  feeRate: 42.42,
  id: "exampleId",
  pnl: 42.42,
  pnlRate: 42.42,
  rR: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  estimatedPnl: 42.42,
  estimatedPnlRate: 42.42,
  feeRate: 42.42,
  id: "exampleId",
  pnl: 42.42,
  pnlRate: 42.42,
  rR: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    estimatedPnl: 42.42,
    estimatedPnlRate: 42.42,
    feeRate: 42.42,
    id: "exampleId",
    pnl: 42.42,
    pnlRate: 42.42,
    rR: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  estimatedPnl: 42.42,
  estimatedPnlRate: 42.42,
  feeRate: 42.42,
  id: "exampleId",
  pnl: 42.42,
  pnlRate: 42.42,
  rR: 42.42,
  updatedAt: new Date(),
};

const service = {
  createTraderSetupPnlPerformance() {
    return CREATE_RESULT;
  },
  traderSetupPnlPerformances: () => FIND_MANY_RESULT,
  traderSetupPnlPerformance: ({ where }: { where: { id: string } }) => {
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

describe("TraderSetupPnlPerformance", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TraderSetupPnlPerformanceService,
          useValue: service,
        },
      ],
      controllers: [TraderSetupPnlPerformanceController],
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

  test("POST /traderSetupPnlPerformances", async () => {
    await request(app.getHttpServer())
      .post("/traderSetupPnlPerformances")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /traderSetupPnlPerformances", async () => {
    await request(app.getHttpServer())
      .get("/traderSetupPnlPerformances")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /traderSetupPnlPerformances/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/traderSetupPnlPerformances"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /traderSetupPnlPerformances/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/traderSetupPnlPerformances"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /traderSetupPnlPerformances existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/traderSetupPnlPerformances")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/traderSetupPnlPerformances")
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
