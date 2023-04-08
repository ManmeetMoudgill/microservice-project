import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  axios
    .post("http://localhost:4003/events", {
      type: "Post Get Request",
    })
    .catch((err) => {
      console.log(err.message);
    });
  res.json({
    message: "posts get request",
  });
});

app.post("/post/create", (req, res) => {
  axios.post("http://localhost:4003/events", {
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
