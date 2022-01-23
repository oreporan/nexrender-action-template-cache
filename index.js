const postdownload = require("./postdownload");
const predownload = require("./predownload");

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

module.exports = run;
