const nodemailer = require("nodemailer");
const moment = require("moment");
const transporter = nodemailer.createTransport({
  host: "mail.stigaoutwear.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const admins = [
  "alieukeita@iut-dhaka.edu",
  "alieukeita201@gmail.com",
  "elsalvacion2022@gmail.com",
];

const sendAppointment = async ({ name, message, phone, date, time }, res) => {
  const mailOptions = {
    from: `New Appointment <${process.env.EMAIL}>`,
    to: admins,
    subject: `${name} booked an appointment `,
    html: `
    <div style="padding: 10px; border: 1px solid #f5f5f5;">
    <p>A new appointment have been booked from kdc.com.bd</p>
    <h2 style="text-align: center; margin-bottom: 15px; color: #EC4899; font-size: 28px;">Patient Details</h2>   
    <table style="font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%; margin: auto; border: 1px solid #EC4899;">
    
    <tr style=" border: 1px solid #EC4899; border-collapse: collapse;">
    <td style=" border: 1px solid #EC4899; border-collapse: collapse; padding: 10px; font-size: 18px;"><b>Name</b> </td>
    <td style=" border: 1px solid #EC4899; border-collapse: collapse; padding: 10px; font-size: 18px;">${name}</td>
    </tr>

    <tr style=" border: 1px solid #EC4899; border-collapse: collapse;">
    <td style=" border: 1px solid #EC4899; border-collapse: collapse; padding: 10px; font-size: 18px;"><b>Phone</b> </td>
    <td style=" border: 1px solid #EC4899; border-collapse: collapse; padding: 10px; font-size: 18px;">${phone}</td>
    </tr>

    <tr style=" border: 1px solid #EC4899; border-collapse: collapse;">
    <td style=" border: 1px solid #EC4899; border-collapse: collapse; padding: 10px; font-size: 18px;"><b>Appointment Date</b> </td>
    <td style=" border: 1px solid #EC4899; border-collapse: collapse; padding: 10px; font-size: 18px;">${moment(
      date
    ).format("dddd, MMMM Do YYYY")}</td>
    </tr>

    <tr>
    <td style=" border: 1px solid #EC4899; border-collapse: collapse; padding: 10px; font-size: 18px;"><b>Appointment Time</b> </td>
    <td style=" border: 1px solid #EC4899; border-collapse: collapse; padding: 10px; font-size: 18px;">${moment(
      time,
      "HH:mm:ss"
    ).format("hh:mm A")}</td>
    </tr>

    <tr>
    <td style=" border: 1px solid #EC4899; border-collapse: collapse; padding: 10px; font-size: 18px;"><b>Problem</b> </td>
    <td style=" border: 1px solid #EC4899; border-collapse: collapse; padding: 10px; font-size: 18px;">${message}</td>
    </tr>
    </table>
    </div>
    `,
  };
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).json({
        errors: [
          {
            msg: "Could not send emails out",
          },
        ],
      });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ msg: "appointment booked" });
    }
  });
};

module.exports = sendAppointment;
