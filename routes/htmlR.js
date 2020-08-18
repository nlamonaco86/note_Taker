// dependencies 
const path = require("path");

module.exports = function(app) {
// route to the index on load
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
// route to notes when you navigate there
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });  
  };