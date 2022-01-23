"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const buildCacheName = (originalFileName, originalWorkPath, cacheDirName) => {
    const fileName = path_1.default.basename(originalFileName);
    return cacheDirName
        ? path_1.default.join(cacheDirName, fileName)
        : path_1.default.join(originalWorkPath, "..", "project_cache", fileName);
};
exports.default = buildCacheName;
//# sourceMappingURL=buildCacheName.js.map