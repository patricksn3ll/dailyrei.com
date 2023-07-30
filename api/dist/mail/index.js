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
Object.defineProperty(exports, "__esModule", { value: true });
const { EmailClient } = require("@azure/communication-email");
//const connectionString = `endpoint=https://<resource-name>.communication.azure.com/;accessKey=<Base64-Encoded-Key>`;
const emailClient = new EmailClient(process.env.EMAIL_SERVICE_CONNECTION_STRING);
const httpTrigger = function (context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        context.log('HTTP trigger function processed a request.');
        const name = (req.query.name || (req.body && req.body.name));
        const email = (req.query.email || (req.body && req.body.email));
        const subject = (req.query.subject || (req.body && req.body.subject));
        const message = (req.query.message || (req.body && req.body.message));
        const responseMessage = `name: ${name}
        email: ${email}
        subject: ${subject}
        message: ${message}`;
        const emailMessage = {
            senderAddress: process.env.EMAIL_SERVICE_NO_REPLY,
            content: {
                subject: `${process.env.WWW_ENDPOINT} - ${subject}`,
                plainText: responseMessage,
            },
            recipients: {
                to: [
                    {
                        address: "sn3ll@hotmail.com",
                    },
                ],
            },
        };
        const poller = yield emailClient.beginSend(emailMessage);
        const response = yield poller.pollUntilDone();
        context.res = {
            status: 200,
            body: response
        };
    });
};
exports.default = httpTrigger;
//# sourceMappingURL=index.js.map