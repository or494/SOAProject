"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var server_basic_configurations_1 = __importDefault(require("./server-basic-configurations"));
var MongooseConnection_1 = __importDefault(require("./DB/DBInstance/MongooseConnection"));
MongooseConnection_1.default().then(function () { return console.log('>>> connected to db'); }).catch(function (err) { return console.log(err); });
app.use(function (req, res, next) {
    console.log('>>> New request recieved');
});
app.listen(server_basic_configurations_1.default.port, function () {
    console.log('>>> App is listening on port 3000!');
});
//# sourceMappingURL=index.js.map