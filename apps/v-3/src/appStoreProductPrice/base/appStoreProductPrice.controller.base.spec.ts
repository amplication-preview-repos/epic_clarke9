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
import { AppStoreProductPriceController } from "../appStoreProductPrice.controller";
import { AppStoreProductPriceService } from "../appStoreProductPrice.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activatedAt: new Date(),
  countryCode: "exampleCountryCode",
  currency: "exampleCurrency",
  id: "exampleId",
  price: 42.42,
  productCode: "exampleProductCode",
};
const CREATE_RESULT = {
  activatedAt: new Date(),
  countryCode: "exampleCountryCode",
  currency: "exampleCurrency",
  id: "exampleId",
  price: 42.42,
  productCode: "exampleProductCode",
};
const FIND_MANY_RESULT = [
  {
    activatedAt: new Date(),
    countryCode: "exampleCountryCode",
    currency: "exampleCurrency",
    id: "exampleId",
    price: 42.42,
    productCode: "exampleProductCode",
  },
];
const FIND_ONE_RESULT = {
  activatedAt: new Date(),
  countryCode: "exampleCountryCode",
  currency: "exampleCurrency",
  id: "exampleId",
  price: 42.42,
  productCode: "exampleProductCode",
};

const service = {
  createAppStoreProductPrice() {
    return CREATE_RESULT;
  },
  appStoreProductPrices: () => FIND_MANY_RESULT,
  appStoreProductPrice: ({ where }: { where: { id: string } }) => {
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

describe("AppStoreProductPrice", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AppStoreProductPriceService,
          useValue: service,
        },
      ],
      controllers: [AppStoreProductPriceController],
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

  test("POST /appStoreProductPrices", async () => {
    await request(app.getHttpServer())
      .post("/appStoreProductPrices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        activatedAt: CREATE_RESULT.activatedAt.toISOString(),
      });
  });

  test("GET /appStoreProductPrices", async () => {
    await request(app.getHttpServer())
      .get("/appStoreProductPrices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          activatedAt: FIND_MANY_RESULT[0].activatedAt.toISOString(),
        },
      ]);
  });

  test("GET /appStoreProductPrices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/appStoreProductPrices"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /appStoreProductPrices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/appStoreProductPrices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        activatedAt: FIND_ONE_RESULT.activatedAt.toISOString(),
      });
  });

  test("POST /appStoreProductPrices existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/appStoreProductPrices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        activatedAt: CREATE_RESULT.activatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/appStoreProductPrices")
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
