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
const predownload_1 = __importDefault(require("./predownload"));
const postdownload_1 = __importDefault(require("./postdownload"));
const run = (job, settings, action, type) => __awaiter(void 0, void 0, void 0, function* () {
    if (type === "predownload") {
        return (0, predownload_1.default)(job, settings, action);
    }
    else if (type === "postdownload") {
        return (0, postdownload_1.default)(job, settings, action);
    }
    throw new Error('[action-template-cache] module must be under "predownload" or "postdownload"');
});
exports.default = run;
//# sourceMappingURL=index.js.map