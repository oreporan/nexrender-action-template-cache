"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const buildCacheName = (originalFileName, originalWorkPath, cacheDirName = 'template_cache') => {
    const fileName = path_1.default.basename(originalFileName);
    return path_1.default.join(originalWorkPath, "..", cacheDirName, fileName);
};
exports.default = buildCacheName;
//# sourceMappingURL=buildCacheName.js.map