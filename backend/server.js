const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");

require("dotenv").config();

const app = express();

// static files
app.use(express.static("public"));
// external middlewares
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(hpp());

// express body parser

app.use(express.json());

const PORT = process.env.PORT || 5000;
// listen to a port
app.listen(PORT, () =>
  console.log(
    `server up and running on ${process.env.NODE_ENV} MODE at ${PORT}`
  )
);
