import Loadable from "react-loadable";
import Loading from "../Loading";

const AsyncPersonPage = Loadable({
  loader: () => import("../PersonPage"),
  loading: Loading
});

export default AsyncPersonPage;
