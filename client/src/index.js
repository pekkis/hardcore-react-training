import express from "express";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

const port = parseInt(process.env.SSR_PORT, 10);

const stats = require(path.resolve(__dirname, "../dist/stats.json"));
const respond = require(path.resolve(__dirname, "../dist-server/server.js"))
  .default;
const app = express();

app.use(
  express.static(path.resolve(__dirname, "../dist"), {
    index: false
  })
);
app.use(respond(stats));

app.listen(port, () => {
  console.log(`Listening @ http://localhost:${port}/`);
});
