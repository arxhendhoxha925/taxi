const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); // Për të lexuar JSON nga trupi i kërkesave

// Konfigurimi i Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail", // Shërbimi që po përdor
    auth: {
        user: "arxhenddddhoxhaaaa@gmail.com", // Email-i yt
        pass: "pqvg asam spgi uufv",   // Password-i specifik për aplikacionin nga Google (jo password-i i zakonshëm)
    },
});

// Endpoint për të pranuar kërkesa POST dhe për të dërguar email
app.post("/send-email", async (req, res) => {
    const { subject, body } = req.body;

    try {
        await transporter.sendMail({
            from: "arxhenddddhoxhaaaa@gmail.com",          // Adresa e dërguesit
            to: "silverstudiocreative@gmail.com",    // Adresa e marrësit
            subject: subject,                     // Subjekti i email-it
            text: body,                           // Përmbajtja e email-it
        });
        res.status(200).send("Email i dërguar me sukses!");
    } catch (error) {
        console.error("Gabim gjatë dërgimit të emailit:", error);
        res.status(500).send("Gabim gjatë dërgimit të emailit.");
    }
});

const cors = require('cors');
app.use(cors());

// Nise serverin në portën 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveri po dëgjon në portën ${PORT}`);
});
