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
const buildCacheName_1 = __importDefault(require("./buildCacheName"));
const predownload = (job, settings, action) => __awaiter(void 0, void 0, void 0, function* () {
    if (job.template.src.startsWith("file://")) {
        settings.logger.log(`[${job.uid}] [action-template-cache] file:// extension not supported, only remote files supported`);
    }
    const fileName = (0, buildCacheName_1.default)(job.template.src, job.workpath, action.cacheDir);
    settings.logger.log(`[${job.uid}] [action-template-cache] searching for cached item ${fileName}`);
    if (!fs_1.default.existsSync(fileName)) {
        settings.logger.log(`[${job.uid}] [action-template-cache] cached item not found in ${fileName}, skipping`);
        return;
    }
    job.template.dest = `file://${fileName}`;
    return;
});
exports.default = predownload;
//# sourceMappingURL=predownload.js.map