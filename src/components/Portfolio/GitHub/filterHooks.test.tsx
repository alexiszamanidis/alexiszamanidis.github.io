import { useSearch } from "./filterHooks";
import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react-hooks";

describe("useSearch", () => {
    it("return content", () => {
        const { result } = renderHook(() => useSearch());
        expect(result.current.search).toBe("");
        expect(result.current.setSearch).toBeInstanceOf(Function);
        expect(result.current.handleSearch).toBeInstanceOf(Function);
    });

    it("update search with useSearch", () => {
        const { result } = renderHook(() => useSearch());
        act(() => {
            result.current.setSearch("test");
        });
        expect(result.current.search).toBe("test");
    });

    it("update search with handleSearch", () => {
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
