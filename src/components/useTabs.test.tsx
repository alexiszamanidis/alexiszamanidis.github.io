import { useTabs } from "./useTabs";
import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react-hooks";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

describe("useTabs", () => {
    it("should return content", () => {
        const { result } = renderHook(() => useTabs());
        expect(result.current.value).toBe(0);
        expect(result.current.setValue).toBeInstanceOf(Function);
        let aboutMeComponent = <AboutMe />;
        if (result.current.showTabContent !== null)
            expect(result.current.showTabContent.type).toBe(aboutMeComponent.type);
    });

    it("should update value with setValue", () => {
        const { result } = renderHook(() => useTabs());
        act(() => {
            result.current.setValue(1);
        });
        expect(result.current.value).toBe(1);
    });

    it("should update value with setValue to 1 and showTabContent value to Portfolio component", () => {
        const { result } = renderHook(() => useTabs());
        act(() => {
            result.current.setValue(1);
        });
        expect(result.current.value).toBe(1);
        let portfolioComponent = <Portfolio />;
        if (result.current.showTabContent !== null)
            expect(result.current.showTabContent.type).toBe(portfolioComponent.type);
    });

    it("should update value with setValue to 2 and showTabContent value to null", () => {
        const { result } = renderHook(() => useTabs());
        act(() => {
            result.current.setValue(2);
        });
        expect(result.current.value).toBe(2);
        expect(result.current.showTabContent).toBe(null);
    });
});
