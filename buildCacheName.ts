import path from "path";

const buildCacheName = (originalFileName: string, originalWorkPath: string, cacheDirName: string = 'template_cache') => {
  const fileName = path.basename(originalFileName);
  return path.join(originalWorkPath, "..", cacheDirName, fileName);
};

export default buildCacheName;
