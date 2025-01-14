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
import { TeamController } from "../team.controller";
import { TeamService } from "../team.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  closed: 42,
  dailyClosed: 42,
  dailyPnl: 42.42,
  dailyRoe: 42.42,
  dailyWr: 42.42,
  id: "exampleId",
  monthlyClosed: 42,
  monthlyPnl: 42.42,
  monthlyRoe: 42.42,
  monthlyWr: 42.42,
  name: "exampleName",
  pnl: 42.42,
  roe: 42.42,
  spotClosed: 42,
  spotDailyClosed: 42,
  spotDailyPnl: 42.42,
  spotDailyRoe: 42.42,
  spotDailyWr: 42.42,
  spotMonthlyClosed: 42,
  spotMonthlyPnl: 42.42,
  spotMonthlyRoe: 42.42,
  spotMonthlyWr: 42.42,
  spotPnl: 42.42,
  spotRoe: 42.42,
  spotWeeklyClosed: 42,
  spotWeeklyPnl: 42.42,
  spotWeeklyRoe: 42.42,
  spotWeeklyWr: 42.42,
  spotWr: 42.42,
  statAt: new Date(),
  summaryDailyRoe: 42.42,
  summaryDailyWr: 42.42,
  summaryMonthlyRoe: 42.42,
  summaryMonthlyWr: 42.42,
  summaryRoe: 42.42,
  summaryWeeklyRoe: 42.42,
  summaryWeeklyWr: 42.42,
  summaryWr: 42.42,
  weeklyClosed: 42,
  weeklyPnl: 42.42,
  weeklyRoe: 42.42,
  weeklyWr: 42.42,
  wr: 42.42,
};
const CREATE_RESULT = {
  closed: 42,
  dailyClosed: 42,
  dailyPnl: 42.42,
  dailyRoe: 42.42,
  dailyWr: 42.42,
  id: "exampleId",
  monthlyClosed: 42,
  monthlyPnl: 42.42,
  monthlyRoe: 42.42,
  monthlyWr: 42.42,
  name: "exampleName",
  pnl: 42.42,
  roe: 42.42,
  spotClosed: 42,
  spotDailyClosed: 42,
  spotDailyPnl: 42.42,
  spotDailyRoe: 42.42,
  spotDailyWr: 42.42,
  spotMonthlyClosed: 42,
  spotMonthlyPnl: 42.42,
  spotMonthlyRoe: 42.42,
  spotMonthlyWr: 42.42,
  spotPnl: 42.42,
  spotRoe: 42.42,
  spotWeeklyClosed: 42,
  spotWeeklyPnl: 42.42,
  spotWeeklyRoe: 42.42,
  spotWeeklyWr: 42.42,
  spotWr: 42.42,
  statAt: new Date(),
  summaryDailyRoe: 42.42,
  summaryDailyWr: 42.42,
  summaryMonthlyRoe: 42.42,
  summaryMonthlyWr: 42.42,
  summaryRoe: 42.42,
  summaryWeeklyRoe: 42.42,
  summaryWeeklyWr: 42.42,
  summaryWr: 42.42,
  weeklyClosed: 42,
  weeklyPnl: 42.42,
  weeklyRoe: 42.42,
  weeklyWr: 42.42,
  wr: 42.42,
};
const FIND_MANY_RESULT = [
  {
    closed: 42,
    dailyClosed: 42,
    dailyPnl: 42.42,
    dailyRoe: 42.42,
    dailyWr: 42.42,
    id: "exampleId",
    monthlyClosed: 42,
    monthlyPnl: 42.42,
    monthlyRoe: 42.42,
    monthlyWr: 42.42,
    name: "exampleName",
    pnl: 42.42,
    roe: 42.42,
    spotClosed: 42,
    spotDailyClosed: 42,
    spotDailyPnl: 42.42,
    spotDailyRoe: 42.42,
    spotDailyWr: 42.42,
    spotMonthlyClosed: 42,
    spotMonthlyPnl: 42.42,
    spotMonthlyRoe: 42.42,
    spotMonthlyWr: 42.42,
    spotPnl: 42.42,
    spotRoe: 42.42,
    spotWeeklyClosed: 42,
    spotWeeklyPnl: 42.42,
    spotWeeklyRoe: 42.42,
    spotWeeklyWr: 42.42,
    spotWr: 42.42,
    statAt: new Date(),
    summaryDailyRoe: 42.42,
    summaryDailyWr: 42.42,
    summaryMonthlyRoe: 42.42,
    summaryMonthlyWr: 42.42,
    summaryRoe: 42.42,
    summaryWeeklyRoe: 42.42,
    summaryWeeklyWr: 42.42,
    summaryWr: 42.42,
    weeklyClosed: 42,
    weeklyPnl: 42.42,
    weeklyRoe: 42.42,
    weeklyWr: 42.42,
    wr: 42.42,
  },
];
const FIND_ONE_RESULT = {
  closed: 42,
  dailyClosed: 42,
  dailyPnl: 42.42,
  dailyRoe: 42.42,
  dailyWr: 42.42,
  id: "exampleId",
  monthlyClosed: 42,
  monthlyPnl: 42.42,
  monthlyRoe: 42.42,
  monthlyWr: 42.42,
  name: "exampleName",
  pnl: 42.42,
  roe: 42.42,
  spotClosed: 42,
  spotDailyClosed: 42,
  spotDailyPnl: 42.42,
  spotDailyRoe: 42.42,
  spotDailyWr: 42.42,
  spotMonthlyClosed: 42,
  spotMonthlyPnl: 42.42,
  spotMonthlyRoe: 42.42,
  spotMonthlyWr: 42.42,
  spotPnl: 42.42,
  spotRoe: 42.42,
  spotWeeklyClosed: 42,
  spotWeeklyPnl: 42.42,
  spotWeeklyRoe: 42.42,
  spotWeeklyWr: 42.42,
  spotWr: 42.42,
  statAt: new Date(),
  summaryDailyRoe: 42.42,
  summaryDailyWr: 42.42,
  summaryMonthlyRoe: 42.42,
  summaryMonthlyWr: 42.42,
  summaryRoe: 42.42,
  summaryWeeklyRoe: 42.42,
  summaryWeeklyWr: 42.42,
  summaryWr: 42.42,
  weeklyClosed: 42,
  weeklyPnl: 42.42,
  weeklyRoe: 42.42,
  weeklyWr: 42.42,
  wr: 42.42,
};

const service = {
  createTeam() {
    return CREATE_RESULT;
  },
  teams: () => FIND_MANY_RESULT,
  team: ({ where }: { where: { id: string } }) => {
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

describe("Team", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TeamService,
          useValue: service,
        },
      ],
      controllers: [TeamController],
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

  test("POST /teams", async () => {
    await request(app.getHttpServer())
      .post("/teams")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        statAt: CREATE_RESULT.statAt.toISOString(),
      });
  });

  test("GET /teams", async () => {
    await request(app.getHttpServer())
      .get("/teams")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          statAt: FIND_MANY_RESULT[0].statAt.toISOString(),
        },
      ]);
  });

  test("GET /teams/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teams"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /teams/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teams"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        statAt: FIND_ONE_RESULT.statAt.toISOString(),
      });
  });

  test("POST /teams existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/teams")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        statAt: CREATE_RESULT.statAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/teams")
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
