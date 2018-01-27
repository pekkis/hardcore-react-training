import express from "express";
import path from "path";

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

app.listen(8080, () => {
  console.log("Listening @ http://localhost:8080/");
});
