"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snsNotificationObject = exports.sqsReceiveObject = exports.s3PutObject = exports.kinesisFirehoseObject = exports.dynamoDbObject = exports.apiGatewayObject = void 0;
var apiGatewayObject_json_1 = __importDefault(require("./apiGatewayObject.json"));
exports.apiGatewayObject = apiGatewayObject_json_1.default;
var dynamoDbObject_json_1 = __importDefault(require("./dynamoDbObject.json"));
exports.dynamoDbObject = dynamoDbObject_json_1.default;
var kinesisFirehoseObject_json_1 = __importDefault(require("./kinesisFirehoseObject.json"));
exports.kinesisFirehoseObject = kinesisFirehoseObject_json_1.default;
var s3PutObject_json_1 = __importDefault(require("./s3PutObject.json"));
exports.s3PutObject = s3PutObject_json_1.default;
var sqsReceiveObject_json_1 = __importDefault(require("./sqsReceiveObject.json"));
exports.sqsReceiveObject = sqsReceiveObject_json_1.default;
var snsNotificationObject_json_1 = __importDefault(require("./snsNotificationObject.json"));
exports.snsNotificationObject = snsNotificationObject_json_1.default;
