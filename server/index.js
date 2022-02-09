const fs = require("fs");
const https = require("https");
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  method: ["GET", "POST", "PATCH", "DELETE", "OPTION"],
};

app.use(cors(corsOptions));
app.use(cookieParser());

const ROUTER = require("./router");
app.use("/", ROUTER); // 라우터 설정

// 서버 실행 코드 (https or http)
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const key = fs.readFileSync(__dirname + "/key.pem", "utf-8");
  const cert = fs.readFileSync(__dirname + "/cert.pem", "utf-8");
  const credentials = { key, cert };

  https
    .createServer(credentials, app)
    .listen(PORT, () => console.log(`${PORT}에서 HTTPS로 실행 중`));
} else {
  app.listen(PORT, () => console.log(`${PORT}에서 HTTP로 실행 중`));
}
