import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import personService from "./services/person";
import graphql from "./services/graphql";
import jwtService from "./services/jwt";
import jwtAuth from "./jwt-auth";
// import customerService from "./services/customer";
// import projectService from "./services/project";
// import officeService from "./services/office";
// import R from "ramda";

const getCommonMiddlewares = requireLogin => {
  if (!requireLogin) {
    return [];
  }

  return [
    jwtAuth,
    (req, res, next) => {
      if (!req.user.isAdmin) {
        return res.status(403).send();
      }

      return next();
    }
  ];
};

const app = express();

const commonMiddlewares = getCommonMiddlewares(process.env.REQUIRE_LOGIN);

app.use(
  cors({
    exposedHeaders: ["x-auth-token", "authorization"]
  })
);
app.use(bodyParser.json());

graphql.applyMiddleware({ app });

app.post(
  "/auth",
  async (req, res, next) => {
    const { email, password } = req.body;
    const person = await personService.auth(email, password);

    if (!person) {
      return res.status(401).send();
    }

    req.auth = person;

    return next();
  },
  jwtService.generateToken,
  jwtService.sendToken
);

app.get("/person", async (req, res, next) => {
  const persons = await personService.all();
  res.json(persons);
});

app.get("/person/:id", async (req, res, next) => {
  const person = await personService.findById(req.params.id);

  if (!person) {
    res.status(404).send("person not found");
  }

  res.json(person);
});

app.post("/person", ...commonMiddlewares, async (req, res, next) => {
  const person = await personService.create(req.body);
  res.json(person);
});

app.delete("/person/:id", ...commonMiddlewares, async (req, res, next) => {
  const person = await personService.findById(req.params.id);
  if (!person) {
    res.status(404).send("person not found");
  }

  await personService.remove(req.params.id);
  res.json(person);
});

/*
const resources = {
  customer: customerService,
  project: projectService,
  office: officeService
};

R.forEachObjIndexed((service, key) => {
  app.get(`/${key}`, async (req, res, next) => {
    const objects = await service.all();
    res.json(objects);
  });

  app.get(`/${key}/:id`, async (req, res, next) => {
    const object = await service.findById(req.params.id);

    if (!object) {
      res.status(404).send(`${key} not found`);
    }
    res.json(object);
  });
}, resources);
*/

if (!process.env.PORT) {
  throw new Error(
    "PORT environment variable is not defined. Did you forgot to copy .env.example to .env?"
  );
}

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
