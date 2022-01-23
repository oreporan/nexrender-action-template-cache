import fs from "fs";
import path from "path";
import buildCacheName from "./buildCacheName";

const postdownload = async (job, settings, action) => {
  const copySource = path.join(job.workpath, path.basename(job.template.src));
  const copyDestination = buildCacheName(
    job.template.src,
    job.workpath,
    action.cacheDir
  );

  if (fs.existsSync(copyDestination)) {
    settings.logger.log(
      `[${job.uid}] [action-template-cache] cached item already exists in ${copyDestination}`
    );
    return;
  }

  settings.logger.log(
    `[${job.uid}] [action-template-cache] setting cached item from ${copySource} to ${copyDestination}`
  );
  fs.copyFileSync(copySource, copyDestination);
  return;
};

module.exports = postdownload;
