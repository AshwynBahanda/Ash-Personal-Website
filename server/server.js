const SERVERON = false;
const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "../build");
let port = null;
if (SERVERON === false) {
  port = 3000;
} else {
  port = process.env.PORT;
}
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});

//Command to push to development server
// "start": "node server/server.js",
