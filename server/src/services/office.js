import raw from "./raw/office.js";
import { asyncronifyAll, slowifyAll } from "./util";
import R from "ramda";

export default R.pipe(
  asyncronifyAll,
  slowifyAll(100, 300)
)(raw);
