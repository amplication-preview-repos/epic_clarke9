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
import { UserSubscriptionController } from "../userSubscription.controller";
import { UserSubscriptionService } from "../userSubscription.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  autoRenewProductCode: "exampleAutoRenewProductCode",
  autoRenewStatus: "true",
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  currency: "exampleCurrency",
  data: "exampleData",
  expireDate: new Date(),
  id: "exampleId",
  isCancelled: "true",
  isDeleted: "true",
  isExpired: "true",
  isPaymentReceived: "true",
  isTrial: "true",
  market: "exampleMarket",
  price: 42.42,
  rawData: "exampleRawData",
  startDate: new Date(),
  transactionId: "exampleTransactionId",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};
const CREATE_RESULT = {
  autoRenewProductCode: "exampleAutoRenewProductCode",
  autoRenewStatus: "true",
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  currency: "exampleCurrency",
  data: "exampleData",
  expireDate: new Date(),
  id: "exampleId",
  isCancelled: "true",
  isDeleted: "true",
  isExpired: "true",
  isPaymentReceived: "true",
  isTrial: "true",
  market: "exampleMarket",
  price: 42.42,
  rawData: "exampleRawData",
  startDate: new Date(),
  transactionId: "exampleTransactionId",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};
const FIND_MANY_RESULT = [
  {
    autoRenewProductCode: "exampleAutoRenewProductCode",
    autoRenewStatus: "true",
    createdAt: new Date(),
    createdById: "exampleCreatedById",
    currency: "exampleCurrency",
    data: "exampleData",
    expireDate: new Date(),
    id: "exampleId",
    isCancelled: "true",
    isDeleted: "true",
    isExpired: "true",
    isPaymentReceived: "true",
    isTrial: "true",
    market: "exampleMarket",
    price: 42.42,
    rawData: "exampleRawData",
    startDate: new Date(),
    transactionId: "exampleTransactionId",
    updatedAt: new Date(),
    updatedById: "exampleUpdatedById",
  },
];
const FIND_ONE_RESULT = {
  autoRenewProductCode: "exampleAutoRenewProductCode",
  autoRenewStatus: "true",
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  currency: "exampleCurrency",
  data: "exampleData",
  expireDate: new Date(),
  id: "exampleId",
  isCancelled: "true",
  isDeleted: "true",
  isExpired: "true",
  isPaymentReceived: "true",
  isTrial: "true",
  market: "exampleMarket",
  price: 42.42,
  rawData: "exampleRawData",
  startDate: new Date(),
  transactionId: "exampleTransactionId",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};

const service = {
  createUserSubscription() {
    return CREATE_RESULT;
  },
  userSubscriptions: () => FIND_MANY_RESULT,
  userSubscription: ({ where }: { where: { id: string } }) => {
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

describe("UserSubscription", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserSubscriptionService,
          useValue: service,
        },
      ],
      controllers: [UserSubscriptionController],
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

  test("POST /userSubscriptions", async () => {
    await request(app.getHttpServer())
      .post("/userSubscriptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expireDate: CREATE_RESULT.expireDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /userSubscriptions", async () => {
    await request(app.getHttpServer())
      .get("/userSubscriptions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expireDate: FIND_MANY_RESULT[0].expireDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /userSubscriptions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userSubscriptions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userSubscriptions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userSubscriptions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expireDate: FIND_ONE_RESULT.expireDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /userSubscriptions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userSubscriptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expireDate: CREATE_RESULT.expireDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/userSubscriptions")
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
