const PortDetector = require("../lib/port");

describe("Test port detector", () => {
    test("Test port is 3001 when running tests on localhost", () => {
        const portDetector = new PortDetector();

        // Port Detector returns an object
        expect(portDetector).toEqual(expect.any(Object));

        // Port is 3001
        expect(portDetector.port).toBe(3001);
    });
});