import errorCorrectionPercents from "./errorCorrectionPercents.js";
describe("Error Correction Percents", () => {
    it("The export of the module should be an object", () => {
        expect(typeof errorCorrectionPercents).toBe("object");
    });
    it.each(Object.values(errorCorrectionPercents))("Values should be numbers", value => {
        expect(typeof value).toBe("number");
    });
    it.each(Object.keys(errorCorrectionPercents))("Allowed only particular keys", key => {
        expect(["L", "M", "Q", "H"]).toContain(key);
    });
});
//# sourceMappingURL=errorCorrectionPercents.test.js.map