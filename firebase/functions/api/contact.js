const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const functions = require('firebase-functions');
const admin = require("firebase-admin")

admin.initializeApp()

const MAIL_ACCOUNT = "vassili.hamcca@gmail.com" // Declare mail account secret.
const MAIL_PASSWORD = "igztekjwltdrzepd"; // Declare mail password secret.
const MAIL_HOST = "smtp.gmail.com"; // Declare mail account secret.
const MAIL_PORT = 465; // Declare port 
const MAIL_FROM = "Eslam Saleh Web Site  <eslamsaleh@gmail.com>"; //declare mail from website 
const MAIL_TO_ADMIN = "eslam.alturki@hotmail.com";
const MAIl_CONTACT_SUBJECT = "Eslam Salem Thérapie demande de contact";
const MAIl_APPOINMENT_SUBJECT = "Eslam Salem Thérapie demande de rendez-vous";

let transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: true,
    auth: {
      user: MAIL_ACCOUNT,
      pass: MAIL_PASSWORD,
    },
  });

exports.sendContactMail = (request, response) => {
    cors(request, response, () => {
        const contact = {
            name : request.body.name,
            email: request.body.email,
            phone: request.body.phone,
            message: request.body.message
    
        }

        const mailOptions = {
            from: MAIL_FROM,
            to: MAIL_TO_ADMIN,
            subject: MAIl_CONTACT_SUBJECT, 
            html:
              `           
      <div>             
        De:` +
                contact.name +
              `<br /><br />              
        Email: ` +
            contact.email +
            `<br /><br />             
        Téléphone:` +
                contact.phone +
              `<br /><br />             
        Message:` +
            contact.message +
              `<br /><br />           
      </div>           
      `, // email content in HTML
          };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                console.log(erro.toString());
            return response.send("Erreur d'envoi de message.");
            }            
            return response.send("Message a été envoyé avec succès.");
        });

    });     

};


exports.sendAppoinmentMail = (request, response) => {
    cors(request, response, () => {
        const contact = {
            name : request.body.name,
            email: request.body.email,
            subject: request.body.subject,
            date: request.body.date,
            message: request.body.message
    
        }

        const mailOptions = {
            from: MAIL_FROM,
            to: MAIL_TO_ADMIN,
            subject: MAIl_APPOINMENT_SUBJECT, 
            html:
              `           
      <div>             
        De:` +
                contact.name +
              `<br /><br />              
        Email: ` +
            contact.email +
            `<br /><br />             
        Object:` +
                contact.subject +
                `<br /><br />             
        Date :` + 
                contact.date +
              `<br /><br />             
        Message:` +
            contact.message +
              `<br /><br />           
      </div>           
      `, // email content in HTML
          };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                console.log(erro.toString());
            return response.send("Erreur d'envoi de message.");
            }            
            return response.send("Message a été envoyé avec succès.");
        });

    });     

};