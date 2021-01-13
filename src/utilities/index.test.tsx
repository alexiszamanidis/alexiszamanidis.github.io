import { trimString } from "./";

it("trimString: Null string", () => {
    let result = trimString(null, 10);
    expect(result).toBe("");
});

it("trimString: String should be trimmed", () => {
    let result = trimString("Trim this string!", 9);
    expect(result).toBe("Trim this...");
});

it("trimString: String should not be trimmed", () => {
    let result = trimString("Trim this string!", 100);
    expect(result).toBe("Trim this string!");
});
