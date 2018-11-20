import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import personService from "./services/person";
import graphql from "./services/graphql";
// import customerService from "./services/customer";
// import projectService from "./services/project";
// import officeService from "./services/office";
// import R from "ramda";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

graphql.applyMiddleware({ app });

app.get("/person", async (req, res, next) => {
  const persons = await personService.all();
  res.json(persons);
});

app.post("/person", async (req, res, next) => {
  const person = await personService.create(req.body);
  res.json(person);
});

app.get("/person/:id", async (req, res, next) => {
  const person = await personService.findById(req.params.id);

  if (!person) {
    res.status(404).send("person not found");
  }

  res.json(person);
});

app.delete("/person/:id", async (req, res, next) => {
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

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
