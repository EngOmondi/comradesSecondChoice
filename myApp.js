let express = require('express');
let app = express();
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
  app.use("/assets", express.static(__dirname + "/assets"));
  
  



































 module.exports = app;
