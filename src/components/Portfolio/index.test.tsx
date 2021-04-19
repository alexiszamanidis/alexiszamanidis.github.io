import Portfolio from "./";
import { shallow } from "enzyme";
import { findByDataTestIdAttribute } from "../../utilities";

describe("Portfolio", () => {
    it("render correctly", () => {
        const wrapper = shallow(<Portfolio />);

        const cardPortfolio = findByDataTestIdAttribute(wrapper, "card-portfolio");
        expect(cardPortfolio).toHaveLength(1);

        const github = findByDataTestIdAttribute(wrapper, "github");
        expect(github).toHaveLength(1);
    });
});
