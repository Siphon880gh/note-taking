// Mock database ORM
const Db = require("../lib/db");
jest.mock("../lib/db");

describe("Mock ORM DB", () => {
    const db = new Db();
    test("Test instantiation", () => {
        expect(db).toEqual(expect.any(Db));
    });
    test("Test DB values", async function() {
        const notes = await db.getAllNotes();
        expect(notes[0].title).toBe("Mocked Title");
    });
});