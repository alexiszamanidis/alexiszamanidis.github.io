import { shallow } from "enzyme";
import Footer, { Copyright } from "./";
import { findByDataTestIdAttribute } from "../../utilities";

describe("Copyright", () => {
    it("render correctly", () => {
        const wrapper = shallow(<Copyright />);

        const copyright = findByDataTestIdAttribute(wrapper, "copyright");
        expect(copyright).toHaveLength(1);
        expect(copyright?.text()).toBe(`© ${new Date().getFullYear()} Copyright: Alexis Zamanidis`);

        const copyrightName = findByDataTestIdAttribute(wrapper, "copyright-name");
        expect(copyrightName).toHaveLength(1);
        expect(copyrightName?.text()).toBe(" Alexis Zamanidis");
    });
});

describe("Footer", () => {
    it("render correctly", () => {
        const wrapper = shallow(<Footer />);

        const footer = findByDataTestIdAttribute(wrapper, "footer");
        expect(footer).toHaveLength(1);

        const copyright = findByDataTestIdAttribute(wrapper, "copyright-inside-footer");
        expect(copyright).toHaveLength(1);
    });
});
