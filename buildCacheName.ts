import path from "path";

const buildCacheName = (
  originalFileName: string,
  originalWorkPath: string,
  cacheDirName: string
) => {
  const fileName = path.basename(originalFileName);
  return cacheDirName
    ? path.join(cacheDirName, fileName)
    : path.join(originalWorkPath, "..", "project_cache", fileName);
};

export default buildCacheName;
