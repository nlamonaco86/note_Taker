// dependencies 
const path = require("path");

module.exports = (app) => {
// route to the index on load
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
// route to notes when you navigate there
    app.get("/notes", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });  

};