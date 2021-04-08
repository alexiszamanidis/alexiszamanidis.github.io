import { useTabs } from "./useTabs";
import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react-hooks";

describe("useTabs", () => {
    it("should return content", () => {
        const { result } = renderHook(() => useTabs());
        expect(result.current.value).toBe(0);
        expect(result.current.setValue).toBeInstanceOf(Function);
        // expect(result.current.showTabContent).toBeInstanceOf(null);
    });

    it("should update value with setValue", () => {
        const { result } = renderHook(() => useTabs());
        act(() => {
            result.current.setValue(1);
        });
        expect(result.current.value).toBe(1);
    });
});
