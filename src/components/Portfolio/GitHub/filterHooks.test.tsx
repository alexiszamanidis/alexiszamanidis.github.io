import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react-hooks";
import { useSearch, useUniqueLanguages } from "./filterHooks";

describe("useSearch", () => {
    it("should return content", () => {
        const { result } = renderHook(() => useSearch());
        expect(result.current.search).toBe("");
        expect(result.current.setSearch).toBeInstanceOf(Function);
        expect(result.current.handleSearch).toBeInstanceOf(Function);
    });

    it("should update search with setSearch", () => {
        const { result } = renderHook(() => useSearch());
        act(() => {
            result.current.setSearch("test");
        });
        expect(result.current.search).toBe("test");
    });

    it("should update search with handleSearch", () => {
        const { result } = renderHook(() => useSearch());
        act(() => {
            let event = {
                target: { value: "test" },
            } as React.ChangeEvent<HTMLInputElement>;
            result.current.handleSearch(event);
        });
        expect(result.current.search).toBe("test");
    });
});

type Repo = {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
};

describe("useUniqueLanguages", () => {
    let data: Repo[] = [
        {
            id: 1,
            name: "C Name",
            description: "C Description",
            language: "C Language",
            stargazers_count: 0,
            forks_count: 0,
            html_url: "C url",
        },
        {
            id: 2,
            name: "C++ Name",
            description: "C++ Description",
            language: "C++ Language",
            stargazers_count: 0,
            forks_count: 0,
            html_url: "C++ url",
        },
    ];

    it("should return content", () => {
        const { result } = renderHook(() => useUniqueLanguages(data));
        expect(result.current.selectedLanguage).toBe("");
        expect(result.current.setSelectedLanguage).toBeInstanceOf(Function);
        expect(result.current.handleLanguage).toBeInstanceOf(Function);
        expect(result.current.languages).toBeInstanceOf(Array);
    });

    it("should update selectedLanguage with setSelectedLanguage", () => {
        const { result } = renderHook(() => useUniqueLanguages(data));
        act(() => {
            result.current.setSelectedLanguage("test");
        });
        expect(result.current.selectedLanguage).toBe("test");
    });

    it("should update search with handleSearch", () => {
        const { result } = renderHook(() => useUniqueLanguages(data));
        act(() => {
            let event = {
                target: { value: "test" },
            } as React.ChangeEvent<{ value: string }>;
            result.current.handleLanguage(event);
        });
        expect(result.current.selectedLanguage).toBe("test");
    });

    it("should return unique languages", () => {
        const { result } = renderHook(() => useUniqueLanguages(data));
        expect(result.current.languages.length).toBe(2);
        expect(result.current.languages[0]).toBe("C Language");
        expect(result.current.languages[1]).toBe("C++ Language");
    });
});
