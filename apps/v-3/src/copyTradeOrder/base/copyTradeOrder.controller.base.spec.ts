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
import { CopyTradeOrderController } from "../copyTradeOrder.controller";
import { CopyTradeOrderService } from "../copyTradeOrder.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actPx: 42.42,
  actSz: 42.42,
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  id: "exampleId",
  isDeleted: "true",
  percentage: 42,
  requestPx: 42.42,
  requestSz: 42.42,
  requestedAt: new Date(),
  side: "exampleSide",
  status: "exampleStatus",
  statusAt: new Date(),
  statusMessage: "exampleStatusMessage",
  stopLossPx: 42.42,
  takeProfitPx: 42.42,
  tpValue: "exampleTpValue",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};
const CREATE_RESULT = {
  actPx: 42.42,
  actSz: 42.42,
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  id: "exampleId",
  isDeleted: "true",
  percentage: 42,
  requestPx: 42.42,
  requestSz: 42.42,
  requestedAt: new Date(),
  side: "exampleSide",
  status: "exampleStatus",
  statusAt: new Date(),
  statusMessage: "exampleStatusMessage",
  stopLossPx: 42.42,
  takeProfitPx: 42.42,
  tpValue: "exampleTpValue",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};
const FIND_MANY_RESULT = [
  {
    actPx: 42.42,
    actSz: 42.42,
    createdAt: new Date(),
    createdById: "exampleCreatedById",
    id: "exampleId",
    isDeleted: "true",
    percentage: 42,
    requestPx: 42.42,
    requestSz: 42.42,
    requestedAt: new Date(),
    side: "exampleSide",
    status: "exampleStatus",
    statusAt: new Date(),
    statusMessage: "exampleStatusMessage",
    stopLossPx: 42.42,
    takeProfitPx: 42.42,
    tpValue: "exampleTpValue",
    updatedAt: new Date(),
    updatedById: "exampleUpdatedById",
  },
];
const FIND_ONE_RESULT = {
  actPx: 42.42,
  actSz: 42.42,
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  id: "exampleId",
  isDeleted: "true",
  percentage: 42,
  requestPx: 42.42,
  requestSz: 42.42,
  requestedAt: new Date(),
  side: "exampleSide",
  status: "exampleStatus",
  statusAt: new Date(),
  statusMessage: "exampleStatusMessage",
  stopLossPx: 42.42,
  takeProfitPx: 42.42,
  tpValue: "exampleTpValue",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};

const service = {
  createCopyTradeOrder() {
    return CREATE_RESULT;
  },
  copyTradeOrders: () => FIND_MANY_RESULT,
  copyTradeOrder: ({ where }: { where: { id: string } }) => {
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

describe("CopyTradeOrder", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CopyTradeOrderService,
          useValue: service,
        },
      ],
      controllers: [CopyTradeOrderController],
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

  test("POST /copyTradeOrders", async () => {
    await request(app.getHttpServer())
      .post("/copyTradeOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        requestedAt: CREATE_RESULT.requestedAt.toISOString(),
        statusAt: CREATE_RESULT.statusAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /copyTradeOrders", async () => {
    await request(app.getHttpServer())
      .get("/copyTradeOrders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          requestedAt: FIND_MANY_RESULT[0].requestedAt.toISOString(),
          statusAt: FIND_MANY_RESULT[0].statusAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /copyTradeOrders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/copyTradeOrders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /copyTradeOrders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/copyTradeOrders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        requestedAt: FIND_ONE_RESULT.requestedAt.toISOString(),
        statusAt: FIND_ONE_RESULT.statusAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /copyTradeOrders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/copyTradeOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        requestedAt: CREATE_RESULT.requestedAt.toISOString(),
        statusAt: CREATE_RESULT.statusAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/copyTradeOrders")
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
