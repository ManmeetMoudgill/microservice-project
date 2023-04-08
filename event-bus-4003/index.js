import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.post("/events", (req, res) => {
  console.log("Received event", req.body);
  res.send({});
});

app.listen(4003, () => {
  console.log("Event bus is running on port 4003");
});
