import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/posts", async (req, res) => {
  await axios.post("http://event-bus-clusterip-srv:4003/events", {
    type: "Post Get Request",
  });

  res.json({
    message: "posts get request",
  });
});

app.post("/post/create", async (req, res) => {
  await axios.post("http://event-bus-clusterip-srv:4003/events", {
    type: "Post Post Request called",
    data: req.body,
  });
  res.json({
    data: req.body,
  });
});

app.listen(4002, () => {
  console.log("Post Service is running on port 4002");
});
