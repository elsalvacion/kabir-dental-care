const router = require("express").Router();
const connection = require("../config/db");
const sendAppointment = require("../util/sendAppointment");
router.post("/", (req, res) => {
  try {
    const { name, phone, date, time, message } = req.body;
    connection.query(
      `insert into appointment(name, phoneNumber, message, appDate, appTime, createdAt) values (?,?,?,?,?,?);`,
      [name, phone, message, date, time, Date.now()],
      (insertErr, insertRes) => {
        if (insertErr) {
          console.log(insertErr);
          res.status(400).json({ msg: "Could not create appointment" });
        } else {
          sendAppointment(req.body, res);
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
