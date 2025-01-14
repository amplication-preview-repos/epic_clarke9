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
import { CalendarTextController } from "../calendarText.controller";
import { CalendarTextService } from "../calendarText.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  acroExpand: "exampleAcroExpand",
  alsoCalled: "exampleAlsoCalled",
  ccNotes: "exampleCcNotes",
  ccNotice: "exampleCcNotice",
  country: "exampleCountry",
  derivedVia: "exampleDerivedVia",
  description: "exampleDescription",
  frequency: "exampleFrequency",
  id: "exampleId",
  language: "exampleLanguage",
  measures: "exampleMeasures",
  source: "exampleSource",
  speaker: "exampleSpeaker",
  title: "exampleTitle",
  usualEffect: "exampleUsualEffect",
  whyTraderscare: "exampleWhyTraderscare",
};
const CREATE_RESULT = {
  acroExpand: "exampleAcroExpand",
  alsoCalled: "exampleAlsoCalled",
  ccNotes: "exampleCcNotes",
  ccNotice: "exampleCcNotice",
  country: "exampleCountry",
  derivedVia: "exampleDerivedVia",
  description: "exampleDescription",
  frequency: "exampleFrequency",
  id: "exampleId",
  language: "exampleLanguage",
  measures: "exampleMeasures",
  source: "exampleSource",
  speaker: "exampleSpeaker",
  title: "exampleTitle",
  usualEffect: "exampleUsualEffect",
  whyTraderscare: "exampleWhyTraderscare",
};
const FIND_MANY_RESULT = [
  {
    acroExpand: "exampleAcroExpand",
    alsoCalled: "exampleAlsoCalled",
    ccNotes: "exampleCcNotes",
    ccNotice: "exampleCcNotice",
    country: "exampleCountry",
    derivedVia: "exampleDerivedVia",
    description: "exampleDescription",
    frequency: "exampleFrequency",
    id: "exampleId",
    language: "exampleLanguage",
    measures: "exampleMeasures",
    source: "exampleSource",
    speaker: "exampleSpeaker",
    title: "exampleTitle",
    usualEffect: "exampleUsualEffect",
    whyTraderscare: "exampleWhyTraderscare",
  },
];
const FIND_ONE_RESULT = {
  acroExpand: "exampleAcroExpand",
  alsoCalled: "exampleAlsoCalled",
  ccNotes: "exampleCcNotes",
  ccNotice: "exampleCcNotice",
  country: "exampleCountry",
  derivedVia: "exampleDerivedVia",
  description: "exampleDescription",
  frequency: "exampleFrequency",
  id: "exampleId",
  language: "exampleLanguage",
  measures: "exampleMeasures",
  source: "exampleSource",
  speaker: "exampleSpeaker",
  title: "exampleTitle",
  usualEffect: "exampleUsualEffect",
  whyTraderscare: "exampleWhyTraderscare",
};

const service = {
  createCalendarText() {
    return CREATE_RESULT;
  },
  calendarTexts: () => FIND_MANY_RESULT,
  calendarText: ({ where }: { where: { id: string } }) => {
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

describe("CalendarText", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CalendarTextService,
          useValue: service,
        },
      ],
      controllers: [CalendarTextController],
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

  test("POST /calendarTexts", async () => {
    await request(app.getHttpServer())
      .post("/calendarTexts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /calendarTexts", async () => {
    await request(app.getHttpServer())
      .get("/calendarTexts")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /calendarTexts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/calendarTexts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /calendarTexts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/calendarTexts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /calendarTexts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/calendarTexts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/calendarTexts")
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
