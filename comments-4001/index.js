import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

app.get("/comments", async (req, res) => {
  //await axios.post("http://localhost:4003/events", {
  //  type: "Comment Get Request",
  //});

  res.json({
    message: "comments get request",
  });
});

app.post("/comment/create", async (req, res) => {
  //await axios.post("http://localhost:4003/events", {
  //  type: "Comment Post Request called",
  //  data: req.body,
  //});
  res.json({
    data: req.body,
  });
});

app.listen(4001, () => {
  console.log("Comment Service is running on port 4001");
});
