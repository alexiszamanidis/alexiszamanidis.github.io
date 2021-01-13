import { getOptions } from "./config";

it("getOptions: Without parameters", () => {
    let getOptsResult = getOptions("basePath", "/endPoint");
    let toBe = {
        url: "basePath/endPoint?",
        method: "GET",
        headers: { Accept: "application/vnd.github.v3+json" },
    };
    expect(JSON.stringify(getOptsResult)).toBe(JSON.stringify(toBe));
});

it("getOptions: With parameters", () => {
    let getOptsResult = getOptions("basePath", "/endPoint", { testParam1: 1, testParam2: 2 });
    let toBe = {
        url: "basePath/endPoint?testParam1=1&testParam2=2",
        method: "GET",
        headers: { Accept: "application/vnd.github.v3+json" },
    };
    expect(JSON.stringify(getOptsResult)).toBe(JSON.stringify(toBe));
});
