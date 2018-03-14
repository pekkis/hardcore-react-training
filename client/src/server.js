// import { getScripts, getStyles } from "@dr-kobros/broilerplate/lib/serverUtils";

const respond = stats => {
  // const chunks = ["meta", "vendor", "client"];
  // const scripts = getScripts(stats, chunks);
  // const styles = getStyles(stats, chunks);

  return async (req, res, next) => {
    res.send("hellurei");
  };
};

export default respond;
