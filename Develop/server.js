const express = require("express");
const app = express();
const path = require("path");

// Get port number
const PortDetector = require("./lib/Port")
const { port } = new PortDetector();

// Get database instance
const Db = require("./lib/Db");
const db = new Db();

// Constants
const ROOT = { root: path.join(__dirname, './public') };

// Request accepts
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// So assets do not 404
app.use(express.static(path.join(__dirname, "./public")));

// Frontpage for Notes app 
app.get("/", (req, res) => {
    res.sendFile("./index.html", ROOT);
})

// Notes listing
app.get("/notes", (req, res) => {
    res.sendFile("notes.html", ROOT);
})

// Request getting all notes
app.get("/api/notes", (req, res) => {
    const arrNoteObjects = db.getAllNotes();
    res.json(arrNoteObjects)
})

// Listen at port
app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);
})