import App from ".";
import { shallow } from "enzyme";
import { findByDataTestIdAttribute } from "../utilities";

describe("App", () => {
    it("render correctly", () => {
        const wrapper = shallow(<App />);

        const app = findByDataTestIdAttribute(wrapper, "layout");
        expect(app).toHaveLength(1);

        const tabs = findByDataTestIdAttribute(wrapper, "tabs");
        expect(tabs).toHaveLength(1);
    });
});
