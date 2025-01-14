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
import { SetupController } from "../setup.controller";
import { SetupService } from "../setup.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activatedStopValue: 42.42,
  activationDate: new Date(),
  clapCount: 42,
  closeDate: new Date(),
  closePrice: 42.42,
  closedById: "exampleClosedById",
  coinName: "exampleCoinName",
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  entryValue: 42.42,
  entryValueEnd: 42.42,
  id: "exampleId",
  image: "exampleImage",
  imageSuccess: "exampleImageSuccess",
  initialEntryValue: 42.42,
  initialEntryValueEnd: 42.42,
  initialProfitTaking1: 42.42,
  initialProfitTaking2: 42.42,
  initialProfitTaking3: 42.42,
  initialProfitTakingAmount1: 42.42,
  initialProfitTakingAmount2: 42.42,
  initialProfitTakingAmount3: 42.42,
  initialRr: "exampleInitialRr",
  initialStopValue: 42.42,
  isActive: "true",
  isDeleted: "true",
  isHidden: "true",
  isStop: "true",
  isTargeted: "true",
  isTp1: "true",
  isTp2: "true",
  isTp3: "true",
  previousEntryValue: 42.42,
  previousEntryValueEnd: 42.42,
  previousProfitTaking1: 42.42,
  previousProfitTaking2: 42.42,
  previousProfitTaking3: 42.42,
  previousProfitTakingAmount1: 42.42,
  previousProfitTakingAmount2: 42.42,
  previousProfitTakingAmount3: 42.42,
  previousStopValue: 42.42,
  profitTaking1: 42.42,
  profitTaking2: 42.42,
  profitTaking3: 42.42,
  profitTakingAmount1: 42,
  profitTakingAmount2: 42,
  profitTakingAmount3: 42,
  rValue: 42.42,
  stopDate: new Date(),
  stopDistance: 42.42,
  stopValue: 42.42,
  subStatus: "exampleSubStatus",
  tags: "exampleTags",
  targetDate: new Date(),
  tp1Date: new Date(),
  tp2Date: new Date(),
  tp3Date: new Date(),
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};
const CREATE_RESULT = {
  activatedStopValue: 42.42,
  activationDate: new Date(),
  clapCount: 42,
  closeDate: new Date(),
  closePrice: 42.42,
  closedById: "exampleClosedById",
  coinName: "exampleCoinName",
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  entryValue: 42.42,
  entryValueEnd: 42.42,
  id: "exampleId",
  image: "exampleImage",
  imageSuccess: "exampleImageSuccess",
  initialEntryValue: 42.42,
  initialEntryValueEnd: 42.42,
  initialProfitTaking1: 42.42,
  initialProfitTaking2: 42.42,
  initialProfitTaking3: 42.42,
  initialProfitTakingAmount1: 42.42,
  initialProfitTakingAmount2: 42.42,
  initialProfitTakingAmount3: 42.42,
  initialRr: "exampleInitialRr",
  initialStopValue: 42.42,
  isActive: "true",
  isDeleted: "true",
  isHidden: "true",
  isStop: "true",
  isTargeted: "true",
  isTp1: "true",
  isTp2: "true",
  isTp3: "true",
  previousEntryValue: 42.42,
  previousEntryValueEnd: 42.42,
  previousProfitTaking1: 42.42,
  previousProfitTaking2: 42.42,
  previousProfitTaking3: 42.42,
  previousProfitTakingAmount1: 42.42,
  previousProfitTakingAmount2: 42.42,
  previousProfitTakingAmount3: 42.42,
  previousStopValue: 42.42,
  profitTaking1: 42.42,
  profitTaking2: 42.42,
  profitTaking3: 42.42,
  profitTakingAmount1: 42,
  profitTakingAmount2: 42,
  profitTakingAmount3: 42,
  rValue: 42.42,
  stopDate: new Date(),
  stopDistance: 42.42,
  stopValue: 42.42,
  subStatus: "exampleSubStatus",
  tags: "exampleTags",
  targetDate: new Date(),
  tp1Date: new Date(),
  tp2Date: new Date(),
  tp3Date: new Date(),
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};
const FIND_MANY_RESULT = [
  {
    activatedStopValue: 42.42,
    activationDate: new Date(),
    clapCount: 42,
    closeDate: new Date(),
    closePrice: 42.42,
    closedById: "exampleClosedById",
    coinName: "exampleCoinName",
    createdAt: new Date(),
    createdById: "exampleCreatedById",
    entryValue: 42.42,
    entryValueEnd: 42.42,
    id: "exampleId",
    image: "exampleImage",
    imageSuccess: "exampleImageSuccess",
    initialEntryValue: 42.42,
    initialEntryValueEnd: 42.42,
    initialProfitTaking1: 42.42,
    initialProfitTaking2: 42.42,
    initialProfitTaking3: 42.42,
    initialProfitTakingAmount1: 42.42,
    initialProfitTakingAmount2: 42.42,
    initialProfitTakingAmount3: 42.42,
    initialRr: "exampleInitialRr",
    initialStopValue: 42.42,
    isActive: "true",
    isDeleted: "true",
    isHidden: "true",
    isStop: "true",
    isTargeted: "true",
    isTp1: "true",
    isTp2: "true",
    isTp3: "true",
    previousEntryValue: 42.42,
    previousEntryValueEnd: 42.42,
    previousProfitTaking1: 42.42,
    previousProfitTaking2: 42.42,
    previousProfitTaking3: 42.42,
    previousProfitTakingAmount1: 42.42,
    previousProfitTakingAmount2: 42.42,
    previousProfitTakingAmount3: 42.42,
    previousStopValue: 42.42,
    profitTaking1: 42.42,
    profitTaking2: 42.42,
    profitTaking3: 42.42,
    profitTakingAmount1: 42,
    profitTakingAmount2: 42,
    profitTakingAmount3: 42,
    rValue: 42.42,
    stopDate: new Date(),
    stopDistance: 42.42,
    stopValue: 42.42,
    subStatus: "exampleSubStatus",
    tags: "exampleTags",
    targetDate: new Date(),
    tp1Date: new Date(),
    tp2Date: new Date(),
    tp3Date: new Date(),
    updatedAt: new Date(),
    updatedById: "exampleUpdatedById",
  },
];
const FIND_ONE_RESULT = {
  activatedStopValue: 42.42,
  activationDate: new Date(),
  clapCount: 42,
  closeDate: new Date(),
  closePrice: 42.42,
  closedById: "exampleClosedById",
  coinName: "exampleCoinName",
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  entryValue: 42.42,
  entryValueEnd: 42.42,
  id: "exampleId",
  image: "exampleImage",
  imageSuccess: "exampleImageSuccess",
  initialEntryValue: 42.42,
  initialEntryValueEnd: 42.42,
  initialProfitTaking1: 42.42,
  initialProfitTaking2: 42.42,
  initialProfitTaking3: 42.42,
  initialProfitTakingAmount1: 42.42,
  initialProfitTakingAmount2: 42.42,
  initialProfitTakingAmount3: 42.42,
  initialRr: "exampleInitialRr",
  initialStopValue: 42.42,
  isActive: "true",
  isDeleted: "true",
  isHidden: "true",
  isStop: "true",
  isTargeted: "true",
  isTp1: "true",
  isTp2: "true",
  isTp3: "true",
  previousEntryValue: 42.42,
  previousEntryValueEnd: 42.42,
  previousProfitTaking1: 42.42,
  previousProfitTaking2: 42.42,
  previousProfitTaking3: 42.42,
  previousProfitTakingAmount1: 42.42,
  previousProfitTakingAmount2: 42.42,
  previousProfitTakingAmount3: 42.42,
  previousStopValue: 42.42,
  profitTaking1: 42.42,
  profitTaking2: 42.42,
  profitTaking3: 42.42,
  profitTakingAmount1: 42,
  profitTakingAmount2: 42,
  profitTakingAmount3: 42,
  rValue: 42.42,
  stopDate: new Date(),
  stopDistance: 42.42,
  stopValue: 42.42,
  subStatus: "exampleSubStatus",
  tags: "exampleTags",
  targetDate: new Date(),
  tp1Date: new Date(),
  tp2Date: new Date(),
  tp3Date: new Date(),
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};

const service = {
  createSetup() {
    return CREATE_RESULT;
  },
  setups: () => FIND_MANY_RESULT,
  setup: ({ where }: { where: { id: string } }) => {
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

describe("Setup", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SetupService,
          useValue: service,
        },
      ],
      controllers: [SetupController],
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

  test("POST /setups", async () => {
    await request(app.getHttpServer())
      .post("/setups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        activationDate: CREATE_RESULT.activationDate.toISOString(),
        closeDate: CREATE_RESULT.closeDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        stopDate: CREATE_RESULT.stopDate.toISOString(),
        targetDate: CREATE_RESULT.targetDate.toISOString(),
        tp1Date: CREATE_RESULT.tp1Date.toISOString(),
        tp2Date: CREATE_RESULT.tp2Date.toISOString(),
        tp3Date: CREATE_RESULT.tp3Date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /setups", async () => {
    await request(app.getHttpServer())
      .get("/setups")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          activationDate: FIND_MANY_RESULT[0].activationDate.toISOString(),
          closeDate: FIND_MANY_RESULT[0].closeDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          stopDate: FIND_MANY_RESULT[0].stopDate.toISOString(),
          targetDate: FIND_MANY_RESULT[0].targetDate.toISOString(),
          tp1Date: FIND_MANY_RESULT[0].tp1Date.toISOString(),
          tp2Date: FIND_MANY_RESULT[0].tp2Date.toISOString(),
          tp3Date: FIND_MANY_RESULT[0].tp3Date.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /setups/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/setups"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /setups/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/setups"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        activationDate: FIND_ONE_RESULT.activationDate.toISOString(),
        closeDate: FIND_ONE_RESULT.closeDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        stopDate: FIND_ONE_RESULT.stopDate.toISOString(),
        targetDate: FIND_ONE_RESULT.targetDate.toISOString(),
        tp1Date: FIND_ONE_RESULT.tp1Date.toISOString(),
        tp2Date: FIND_ONE_RESULT.tp2Date.toISOString(),
        tp3Date: FIND_ONE_RESULT.tp3Date.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /setups existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/setups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        activationDate: CREATE_RESULT.activationDate.toISOString(),
        closeDate: CREATE_RESULT.closeDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        stopDate: CREATE_RESULT.stopDate.toISOString(),
        targetDate: CREATE_RESULT.targetDate.toISOString(),
        tp1Date: CREATE_RESULT.tp1Date.toISOString(),
        tp2Date: CREATE_RESULT.tp2Date.toISOString(),
        tp3Date: CREATE_RESULT.tp3Date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/setups")
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
