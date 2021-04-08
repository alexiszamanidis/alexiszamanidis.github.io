import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react-hooks";
import { useFilteredData, useSearch, useUniqueLanguages } from "./filterHooks";

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

let data: Repo[] = [
    {
        id: 1,
        name: "C Name",
        description: "C Description",
        language: "C",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "C url",
    },
    {
        id: 2,
        name: "C++ Name",
        description: "C++ Description",
        language: "C++",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "C++ url",
    },
    {
        id: 3,
        name: "C++ Name 2",
        description: "C++ Description 2",
        language: "C++",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "C++ url 2",
    },
];

describe("useUniqueLanguages", () => {
    it("should return content", () => {
        const { result } = renderHook(() => useUniqueLanguages(data));
        expect(result.current.selectedLanguage).toBe("");
        expect(result.current.setSelectedLanguage).toBeInstanceOf(Function);
        expect(result.current.handleLanguage).toBeInstanceOf(Function);
        expect(result.current.languages).toBeInstanceOf(Array);
        expect(result.current.languages.length).toBe(2);
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
        expect(result.current.languages[0]).toBe("C");
        expect(result.current.languages[1]).toBe("C++");
    });
});

describe("useFilteredData", () => {
    it("should return content", () => {
        const { result } = renderHook(() => useFilteredData(data, "", ""));
        expect(result.current.computedData).toBeInstanceOf(Array);
        expect(result.current.computedData.length).toBe(3);
    });

    it("should filter data by debouncedSearch", () => {
        const { result } = renderHook(() => useFilteredData(data, "C Name", ""));
        expect(result.current.computedData.length).toBe(1);
        expect(result.current.computedData[0]).toMatchObject({
            id: 1,
            name: "C Name",
            description: "C Description",
            language: "C",
            stargazers_count: 0,
            forks_count: 0,
            html_url: "C url",
        });
    });

    it("should filter data by selectedLanguage", () => {
        const { result } = renderHook(() => useFilteredData(data, "", "C"));
        expect(result.current.computedData.length).toBe(1);
        expect(result.current.computedData[0]).toMatchObject({
            id: 1,
            name: "C Name",
            description: "C Description",
            language: "C",
            stargazers_count: 0,
            forks_count: 0,
            html_url: "C url",
        });
    });

    it("should filter data by debouncedSearch and selectedLanguage", () => {
        const { result } = renderHook(() => useFilteredData(data, "C++ Name 2", "C++"));
        expect(result.current.computedData.length).toBe(1);
        expect(result.current.computedData[0]).toMatchObject({
            id: 3,
            name: "C++ Name 2",
            description: "C++ Description 2",
            language: "C++",
            stargazers_count: 0,
            forks_count: 0,
            html_url: "C++ url 2",
        });
    });
});
