const fs = require("fs");
const DB_PATH = "./db/db.json";

module.exports = class {
    constructor() {
            this.DB_PATH = DB_PATH;

            // Empty notes until getAllNotes called
            this.notes = [];
        }
        /**
         * @function getAllNotes
         * Read notes from JSON file at DB_PATH
         * 
         */
    getAllNotes() {
        this.notes = this.wrappers().readJSONFile(DB_PATH);
        return this.notes;
    }
    saveNote(newNote) {
        // console.log({ notes: this.notes });
        // throw "";
        // Get a new unique ID
        const lastNote = this.notes[this.notes.length - 1];
        const lastId = parseInt(lastNote.id);
        const newId = lastId + 1;

        // Assign new Id to new note
        newNote.id = newId;

        // Update notes object array
        this.notes.push(newNote);
        this.wrappers().writeJSONFile(this.notes);
    }
    wrappers() {
        return {
            /**
             * Wrapper function that reads contents from db.json and returns it in Array<Object> form
             */
            readJSONFile: function() {
                let jsonText = fs.readFileSync(DB_PATH, "utf8", (err) => {
                    if (err) throw err;
                });

                if (jsonText.length === 0) jsonText = "[]";
                let arrayObject = JSON.parse(jsonText);
                return arrayObject;
            },
            /**
             * Wrapper function that writes new note object in JSON string form to db.json
             */
            writeJSONFile: function(notes) {
                fs.writeFileSync(DB_PATH, JSON.stringify(notes), err => {
                    if (err) throw err;
                })
            }
        }
    }

}