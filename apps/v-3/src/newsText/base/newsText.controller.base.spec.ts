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
import { NewsTextController } from "../newsText.controller";
import { NewsTextService } from "../newsText.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  fullText: "exampleFullText",
  id: "exampleId",
  language: "exampleLanguage",
  text: "exampleText",
  title: "exampleTitle",
};
const CREATE_RESULT = {
  fullText: "exampleFullText",
  id: "exampleId",
  language: "exampleLanguage",
  text: "exampleText",
  title: "exampleTitle",
};
const FIND_MANY_RESULT = [
  {
    fullText: "exampleFullText",
    id: "exampleId",
    language: "exampleLanguage",
    text: "exampleText",
    title: "exampleTitle",
  },
];
const FIND_ONE_RESULT = {
  fullText: "exampleFullText",
  id: "exampleId",
  language: "exampleLanguage",
  text: "exampleText",
  title: "exampleTitle",
};

const service = {
  createNewsText() {
    return CREATE_RESULT;
  },
  newsTexts: () => FIND_MANY_RESULT,
  newsText: ({ where }: { where: { id: string } }) => {
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

describe("NewsText", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: NewsTextService,
          useValue: service,
        },
      ],
      controllers: [NewsTextController],
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

  test("POST /newsTexts", async () => {
    await request(app.getHttpServer())
      .post("/newsTexts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /newsTexts", async () => {
    await request(app.getHttpServer())
      .get("/newsTexts")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /newsTexts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/newsTexts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /newsTexts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/newsTexts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /newsTexts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/newsTexts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/newsTexts")
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
