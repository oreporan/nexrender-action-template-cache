import predownload from "./predownload";
import postdownload from "./postdownload";

const run = async (job, settings, action, type) => {

  if (type === "predownload") {
    return predownload(job, settings, action);
  } else if (type === "postdownload") {
    return postdownload(job, settings, action);
  }
  throw new Error(
    '[action-template-cache] module must be under "predownload" or "postdownload"'
  );
};

export default run;
