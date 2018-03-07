import Loadable from "react-loadable";
import Loading from "../Loading";

const AsyncIndexPage = Loadable({
  loader: () => import("../IndexPage"),
  loading: Loading
});

export default AsyncIndexPage;
