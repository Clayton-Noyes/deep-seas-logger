"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = void 0;
var winston = __importStar(require("winston"));
// To add metadata to a log that differs from the standard meta keys:
//   logger.info('Hello world', { customMeta: 'custom data' });
function createLogger() {
    var levels = {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6
    };
    var metadata = {
        // Expected Environment Variables
        appName: process.env.APP_NAME,
        domain: process.env.DOMAIN,
        environment: process.env.NODE_ENV,
        userId: process.env.USER_ID,
        platformType: process.env.PLATFORM
    };
    return winston.createLogger({
        levels: levels,
        format: winston.format.json(),
        defaultMeta: metadata,
        transports: [
            new winston.transports.Console({
                format: winston.format.simple()
            }),
        ],
    });
}
exports.createLogger = createLogger;
