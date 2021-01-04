const express = require("express");
const app = express();
const path = require("path");
const favicon = require("serve-favicon");

// Set favicon
// app.use(favicon(path.join(__dirname, './public/assets/icons/', 'Pelfusion-Long-Shadow-Ios7-Notes.ico')))
// app.use(express.favicon("public/assets/icons/Pelfusion-Long-Shadow-Ios7-Notes.ico"));
app.use(favicon(path.join(__dirname, 'public', 'assets', 'ico', 'favicon.ico')));

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

// Request posting a new note
app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let updatedNotesArr = db.saveNote(newNote);
    res.json(updatedNotesArr);
})

// Request deleting a note
app.delete("/api/notes/:idNote", (req, res) => {
    // Get Note Id that the user picked for deletion
    let idNote = req.params.idNote;
    idNote = parseInt(idNote);

    // Delete note from ORM by the note ID
    let updatedNotesArr = db.deleteNote(idNote);
    res.json(updatedNotesArr);
})

// Listen at port
app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);
})