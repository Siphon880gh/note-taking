module.exports = class {
    constructor() {
        this.notes = [
            { title: "Mocked Title", text: "Mocked text", id: 0 }
        ];
    }
    async getAllNotes() {
        return new Promise((resolve, reject) => {
            resolve(this.notes);
        });
    }
    async saveNote(newNote) {
        return new Promise((resolve, reject) => {
            this.notes.push(newNote);
            resolve(this.notes);
        });
    }

}