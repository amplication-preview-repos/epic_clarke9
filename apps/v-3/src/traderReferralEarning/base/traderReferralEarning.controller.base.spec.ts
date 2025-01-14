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
import { TraderReferralEarningController } from "../traderReferralEarning.controller";
import { TraderReferralEarningService } from "../traderReferralEarning.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  cancellationDate: new Date(),
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  id: "exampleId",
  installment: 42,
  installments: 42,
  isCancelled: "true",
  isDeleted: "true",
  isPaid: "true",
  isWithdrawal: "true",
  paidDate: new Date(),
  traderEarnDate: new Date(),
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
  withdrawalDate: new Date(),
};
const CREATE_RESULT = {
  amount: 42.42,
  cancellationDate: new Date(),
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  id: "exampleId",
  installment: 42,
  installments: 42,
  isCancelled: "true",
  isDeleted: "true",
  isPaid: "true",
  isWithdrawal: "true",
  paidDate: new Date(),
  traderEarnDate: new Date(),
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
  withdrawalDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    cancellationDate: new Date(),
    createdAt: new Date(),
    createdById: "exampleCreatedById",
    id: "exampleId",
    installment: 42,
    installments: 42,
    isCancelled: "true",
    isDeleted: "true",
    isPaid: "true",
    isWithdrawal: "true",
    paidDate: new Date(),
    traderEarnDate: new Date(),
    updatedAt: new Date(),
    updatedById: "exampleUpdatedById",
    withdrawalDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  cancellationDate: new Date(),
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  id: "exampleId",
  installment: 42,
  installments: 42,
  isCancelled: "true",
  isDeleted: "true",
  isPaid: "true",
  isWithdrawal: "true",
  paidDate: new Date(),
  traderEarnDate: new Date(),
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
  withdrawalDate: new Date(),
};

const service = {
  createTraderReferralEarning() {
    return CREATE_RESULT;
  },
  traderReferralEarnings: () => FIND_MANY_RESULT,
  traderReferralEarning: ({ where }: { where: { id: string } }) => {
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

describe("TraderReferralEarning", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TraderReferralEarningService,
          useValue: service,
        },
      ],
      controllers: [TraderReferralEarningController],
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

  test("POST /traderReferralEarnings", async () => {
    await request(app.getHttpServer())
      .post("/traderReferralEarnings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        cancellationDate: CREATE_RESULT.cancellationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paidDate: CREATE_RESULT.paidDate.toISOString(),
        traderEarnDate: CREATE_RESULT.traderEarnDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        withdrawalDate: CREATE_RESULT.withdrawalDate.toISOString(),
      });
  });

  test("GET /traderReferralEarnings", async () => {
    await request(app.getHttpServer())
      .get("/traderReferralEarnings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          cancellationDate: FIND_MANY_RESULT[0].cancellationDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          paidDate: FIND_MANY_RESULT[0].paidDate.toISOString(),
          traderEarnDate: FIND_MANY_RESULT[0].traderEarnDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          withdrawalDate: FIND_MANY_RESULT[0].withdrawalDate.toISOString(),
        },
      ]);
  });

  test("GET /traderReferralEarnings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/traderReferralEarnings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /traderReferralEarnings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/traderReferralEarnings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        cancellationDate: FIND_ONE_RESULT.cancellationDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        paidDate: FIND_ONE_RESULT.paidDate.toISOString(),
        traderEarnDate: FIND_ONE_RESULT.traderEarnDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        withdrawalDate: FIND_ONE_RESULT.withdrawalDate.toISOString(),
      });
  });

  test("POST /traderReferralEarnings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/traderReferralEarnings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        cancellationDate: CREATE_RESULT.cancellationDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paidDate: CREATE_RESULT.paidDate.toISOString(),
        traderEarnDate: CREATE_RESULT.traderEarnDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        withdrawalDate: CREATE_RESULT.withdrawalDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/traderReferralEarnings")
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
