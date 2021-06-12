import MyTabs from ".";
import { shallow } from "enzyme";
import { findByDataTestIdAttribute } from "../../utilities";

describe("MyTabs", () => {
    it("render correctly", () => {
        const wrapper = shallow(<MyTabs />);

        const app = findByDataTestIdAttribute(wrapper, "tabs");
        expect(app).toHaveLength(1);
    });
});
