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
import { NewsController } from "../news.controller";
import { NewsService } from "../news.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  date: new Date(),
  fullText: "exampleFullText",
  id: "exampleId",
  imageURL: "exampleImageUrl",
  isDeleted: "true",
  newsURL: "exampleNewsUrl",
  sentiment: "exampleSentiment",
  sourceName: "exampleSourceName",
  text: "exampleText",
  thumbnailURL: "exampleThumbnailUrl",
  tickers: "exampleTickers",
  title: "exampleTitle",
  topics: "exampleTopics",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  date: new Date(),
  fullText: "exampleFullText",
  id: "exampleId",
  imageURL: "exampleImageUrl",
  isDeleted: "true",
  newsURL: "exampleNewsUrl",
  sentiment: "exampleSentiment",
  sourceName: "exampleSourceName",
  text: "exampleText",
  thumbnailURL: "exampleThumbnailUrl",
  tickers: "exampleTickers",
  title: "exampleTitle",
  topics: "exampleTopics",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    createdById: "exampleCreatedById",
    date: new Date(),
    fullText: "exampleFullText",
    id: "exampleId",
    imageURL: "exampleImageUrl",
    isDeleted: "true",
    newsURL: "exampleNewsUrl",
    sentiment: "exampleSentiment",
    sourceName: "exampleSourceName",
    text: "exampleText",
    thumbnailURL: "exampleThumbnailUrl",
    tickers: "exampleTickers",
    title: "exampleTitle",
    topics: "exampleTopics",
    typeField: "exampleTypeField",
    updatedAt: new Date(),
    updatedById: "exampleUpdatedById",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  createdById: "exampleCreatedById",
  date: new Date(),
  fullText: "exampleFullText",
  id: "exampleId",
  imageURL: "exampleImageUrl",
  isDeleted: "true",
  newsURL: "exampleNewsUrl",
  sentiment: "exampleSentiment",
  sourceName: "exampleSourceName",
  text: "exampleText",
  thumbnailURL: "exampleThumbnailUrl",
  tickers: "exampleTickers",
  title: "exampleTitle",
  topics: "exampleTopics",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  updatedById: "exampleUpdatedById",
};

const service = {
  createNews() {
    return CREATE_RESULT;
  },
  newsItems: () => FIND_MANY_RESULT,
  news: ({ where }: { where: { id: string } }) => {
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

describe("News", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: NewsService,
          useValue: service,
        },
      ],
      controllers: [NewsController],
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

  test("POST /news", async () => {
    await request(app.getHttpServer())
      .post("/news")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /news", async () => {
    await request(app.getHttpServer())
      .get("/news")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /news/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/news"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /news/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/news"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /news existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/news")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/news")
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
