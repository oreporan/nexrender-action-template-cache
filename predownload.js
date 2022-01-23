import fs from "fs";
import buildCacheName from "./buildCacheName";

const predownload = async (job, settings, action) => {
  if (job.template.src.startsWith("file://")) {
    settings.logger.log(
      `[${job.uid}] [action-template-cache] file:// extension not supported, only remote files supported`
    );
  }
  const fileName = buildCacheName(
    job.template.src,
    job.workpath,
    action.cacheDir
  );
  settings.logger.log(
    `[${job.uid}] [action-template-cache] searching for cached item ${fileName}`
  );

  if (!fs.existsSync(fileName)) {
    settings.logger.log(
      `[${job.uid}] [action-template-cache] cached item not found in ${fileName}, skipping`
    );
    return;
  }

  job.template.dest = `file://${fileName}`;
  return;
};

module.exports = predownload;
