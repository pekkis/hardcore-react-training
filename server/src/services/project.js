import raw from "./raw/project.js";
import { asyncronifyAll, slowifyAll } from "./util";
import R from "ramda";

export default R.pipe(
  asyncronifyAll,
  slowifyAll(50, 300)
)(raw);
