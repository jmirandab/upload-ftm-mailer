import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import {getFieldName, getValue } from './utils'
const cors = require('cors');


const allowedOrigins = ['https://jmirandab.github.io/', 'www.fondomesoamericano.org', 'localhost:3000'];

// const corsOptions = {
//   origin: allowedOrigins,
//   methods: 'POST',
//   credentials: true, // enable set cookie
//   optionsSuccessStatus: 204, // No Content response to preflight request
//   allowedHeaders: 'Content-Type,Authorization',
// };



const app = express();
const port = 3001;

// Enable CORS with specific options
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


console.log(' > Start');
app.post('/send-email', async (req: Request, res: Response) => {
    console.log(' > post');
  try {
    const formData = req.body;

    const formDataKeys = Object.keys(formData)
    let subject = "Nueva queja " +(new Date()).toLocaleString();
    let text = "<h1>" + subject + "</h1>"; 
    text += "<div>"+ Date()+ "</div>";
    formDataKeys.forEach(key=>{
      text = text + "<p>"+"<div><strong>"+getFieldName(key)+": </strong></div>"+getValue(formData[key])+"</p>";
    })
  

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
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
      html:text,
    };

    // Send the email
     const info = await transporter.sendMail(mailOptions);

//console.log('Email sent:', info.response);
    res.send('Email sent successfully >>> ' );
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
