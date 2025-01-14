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
import { CopyTradeController } from "../copyTrade.controller";
import { CopyTradeService } from "../copyTrade.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activatedAt: new Date(),
  assetSize: 42.42,
  copiedAt: new Date(),
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  errorMessage: "exampleErrorMessage",
  errorNo: "exampleErrorNo",
  id: "exampleId",
  isDeleted: "true",
  market: "exampleMarket",
  realizedPnl: 42.42,
  realizedR: 42.42,
  state: "exampleState",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
  usdSize: 42.42,
};
const CREATE_RESULT = {
  activatedAt: new Date(),
  assetSize: 42.42,
  copiedAt: new Date(),
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  errorMessage: "exampleErrorMessage",
  errorNo: "exampleErrorNo",
  id: "exampleId",
  isDeleted: "true",
  market: "exampleMarket",
  realizedPnl: 42.42,
  realizedR: 42.42,
  state: "exampleState",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
  usdSize: 42.42,
};
const FIND_MANY_RESULT = [
  {
    activatedAt: new Date(),
    assetSize: 42.42,
    copiedAt: new Date(),
    createdAt: new Date(),
    createdById: "exampleCreatedById",
    errorMessage: "exampleErrorMessage",
    errorNo: "exampleErrorNo",
    id: "exampleId",
    isDeleted: "true",
    market: "exampleMarket",
    realizedPnl: 42.42,
    realizedR: 42.42,
    state: "exampleState",
    updatedAt: new Date(),
    updatedById: "exampleUpdatedById",
    usdSize: 42.42,
  },
];
const FIND_ONE_RESULT = {
  activatedAt: new Date(),
  assetSize: 42.42,
  copiedAt: new Date(),
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  errorMessage: "exampleErrorMessage",
  errorNo: "exampleErrorNo",
  id: "exampleId",
  isDeleted: "true",
  market: "exampleMarket",
  realizedPnl: 42.42,
  realizedR: 42.42,
  state: "exampleState",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
  usdSize: 42.42,
};

const service = {
  createCopyTrade() {
    return CREATE_RESULT;
  },
  copyTrades: () => FIND_MANY_RESULT,
  copyTrade: ({ where }: { where: { id: string } }) => {
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

describe("CopyTrade", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CopyTradeService,
          useValue: service,
        },
      ],
      controllers: [CopyTradeController],
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

  test("POST /copyTrades", async () => {
    await request(app.getHttpServer())
      .post("/copyTrades")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        activatedAt: CREATE_RESULT.activatedAt.toISOString(),
        copiedAt: CREATE_RESULT.copiedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /copyTrades", async () => {
    await request(app.getHttpServer())
      .get("/copyTrades")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          activatedAt: FIND_MANY_RESULT[0].activatedAt.toISOString(),
          copiedAt: FIND_MANY_RESULT[0].copiedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /copyTrades/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/copyTrades"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /copyTrades/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/copyTrades"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        activatedAt: FIND_ONE_RESULT.activatedAt.toISOString(),
        copiedAt: FIND_ONE_RESULT.copiedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /copyTrades existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/copyTrades")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        activatedAt: CREATE_RESULT.activatedAt.toISOString(),
        copiedAt: CREATE_RESULT.copiedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/copyTrades")
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
