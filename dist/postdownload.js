"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const buildCacheName_1 = __importDefault(require("./buildCacheName"));
const postdownload = (job, settings, action) => __awaiter(void 0, void 0, void 0, function* () {
    const copySource = path_1.default.join(job.workpath, path_1.default.basename(job.template.src));
    const copyDestination = (0, buildCacheName_1.default)(job.template.src, job.workpath, action.cacheDir);
    if (fs_1.default.existsSync(copyDestination)) {
        settings.logger.log(`[${job.uid}] [action-template-cache] cached item already exists in ${copyDestination}`);
        return;
    }
    settings.logger.log(`[${job.uid}] [action-template-cache] setting cached item from ${copySource} to ${copyDestination}`);
    fs_1.default.copyFileSync(copySource, copyDestination);
    return;
});
exports.default = postdownload;
//# sourceMappingURL=postdownload.js.map