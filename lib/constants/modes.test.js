import modes from "./modes.js";
describe("Modes", () => {
    it("The export of the module should be an object", () => {
        expect(typeof modes).toBe("object");
    });
    it.each(Object.values(modes))("Values should be strings", value => {
        expect(typeof value).toBe("string");
    });
});
//# sourceMappingURL=modes.test.js.map