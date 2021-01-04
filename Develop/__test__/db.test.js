// Database connected to db.json
const Db = require("../lib/db");

describe("Actual ORM DB", () => {
    const db = new Db();
    test("Test instantiation", () => {
        expect(db).toEqual(expect.any(Db));
    });
    test("Test DB file path", async function() {
        expect(db.DB_PATH).toEqual(expect.stringContaining("db.json"));
    });
    test("Test reads an array of objects or empty array from DB file path", async function() {
        const presumedArrayObjects = db.getAllNotes();
        const presumedSquareBracketAt1stCharacter = JSON.stringify(presumedArrayObjects);
        expect(presumedSquareBracketAt1stCharacter[0]).toBe('[');
    });
    test("Test write to DB", async function() {
        const newNote = { title: "Inserted Title", text: "Inserted Text" };

        // Save new note
        db.saveNote(newNote);
        const updatedNotes = db.getAllNotes();

        // See if new note is in JSON file
        const lastDbNote = updatedNotes[updatedNotes.length - 1];
        expect(lastDbNote.title).toBe("Inserted Title");
    });
});