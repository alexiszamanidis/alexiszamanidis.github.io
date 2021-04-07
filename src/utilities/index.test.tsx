import { trimString } from "./";

describe("trimString", () => {
    it("Null string", () => {
        let result = trimString(null, 10);
        expect(result).toBe("");
    });

    it("String should be trimmed", () => {
        let result = trimString("Trim this string!", 9);
        expect(result).toBe("Trim this...");
    });

    it("String should not be trimmed", () => {
        let result = trimString("Trim this string!", 100);
        expect(result).toBe("Trim this string!");
    });
});
