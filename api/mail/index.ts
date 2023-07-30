import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const { EmailClient } = require("@azure/communication-email");

//const connectionString = `endpoint=https://<resource-name>.communication.azure.com/;accessKey=<Base64-Encoded-Key>`;
const emailClient = new EmailClient(process.env.EMAIL_SERVICE_CONNECTION_STRING);

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const email = (req.query.email || (req.body && req.body.email));
    const subject = (req.query.subject || (req.body && req.body.subject));
    const message = (req.query.message || (req.body && req.body.message));

    const responseMessage = `name: ${name}
        email: ${email}
        subject: ${subject}
        message: ${message}`

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

      const poller = await emailClient.beginSend(emailMessage);
      const response = await poller.pollUntilDone();

    context.res = {
        status: 200,
        body: response
    };

};

export default httpTrigger;
