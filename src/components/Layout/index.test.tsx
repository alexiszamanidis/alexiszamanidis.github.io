import Layout from ".";
import { shallow } from "enzyme";
import { findByDataTestIdAttribute } from "../../utilities";

describe("Layout", () => {
    it("render correctly", () => {
        const wrapper = shallow(<Layout />);

        const app = findByDataTestIdAttribute(wrapper, "layout");
        expect(app).toHaveLength(1);

        const tabs = findByDataTestIdAttribute(wrapper, "children");
        expect(tabs).toHaveLength(1);
    });
});
