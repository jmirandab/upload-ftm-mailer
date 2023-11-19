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
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const body_parser_1 = __importDefault(require("body-parser"));
const utils_1 = require("./utils");
const cors = require('cors');
const allowedOrigins = ['https://jmirandab.github.io/', 'localhost:3000'];
// const corsOptions = {
//   origin: allowedOrigins,
//   methods: 'POST',
//   credentials: true, // enable set cookie
//   optionsSuccessStatus: 204, // No Content response to preflight request
//   allowedHeaders: 'Content-Type,Authorization',
// };
const app = (0, express_1.default)();
const port = 3001;
// Enable CORS with specific options
app.use(cors());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
console.log(' > Start');
app.post('/send-email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(' > post');
    try {
        const formData = req.body;
        const formDataKeys = Object.keys(formData);
        let subject = "Nueva queja " + (new Date()).toLocaleString();
        let text = "<h1>" + subject + "</h1>";
        text += "<div>" + Date() + "</div>";
        formDataKeys.forEach(key => {
            text = text + "<p>" + "<div><strong>" + (0, utils_1.getFieldName)(key) + ": </strong></div>" + formData[key] + "</p>";
        });
        // Create a nodemailer transporter
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: 'testmailerjm@gmail.com',
                pass: 'borp bclu nvvp ydyl',
            },
        });
        // Create the email options
        const mailOptions = {
            from: 'testmailerjm@gmail.com',
            to: "juan.miranda.hr9@gmail.com",
            subject: subject,
            text: text,
            html: text,
        };
        // Send the email
        const info = yield transporter.sendMail(mailOptions);
        //console.log('Email sent:', info.response);
        res.send('Email sent successfully >>> ');
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Internal Server Error');
    }
}));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
