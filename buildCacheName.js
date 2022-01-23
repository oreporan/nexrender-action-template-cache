import path from "path";

const buildCacheName = (
  originalFileName,
  originalWorkPath,
  cacheDirName
) => {
  const fileName = path.basename(originalFileName);
  return cacheDirName
    ? path.join(cacheDirName, fileName)
    : path.join(originalWorkPath, "..", "project_cache", fileName);
};

module.exports = buildCacheName;
