import raw from "./raw/customer.js";
import { asyncronifyAll, slowifyAll } from "./util";
import R from "ramda";

export default R.pipe(
  asyncronifyAll,
  slowifyAll(500, 2000)
)(raw);
