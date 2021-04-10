import CustomButtonLink from "./";
import { shallow, mount } from "enzyme";
import { findByDataTestIdAttribute } from "../../utilities";

interface CustomButtonLinkProps {
    link: string;
    size: "small" | "medium";
    icon: JSX.Element;
    text: string;
}

describe("CustomButtonLink", () => {
    let customButtonLinkProps: CustomButtonLinkProps;

    beforeEach(() => {
        customButtonLinkProps = {
            link: "link test",
            size: "small",
            icon: <div className="icon test">icon test</div>,
            text: "text test",
        };
    });

    it("render correctly", () => {
        const wrapper = shallow(<CustomButtonLink {...customButtonLinkProps} />);

        const link = findByDataTestIdAttribute(wrapper, "custom-button-link-a");
        expect(link).toHaveLength(1);

        const button = findByDataTestIdAttribute(wrapper, "custom-button-link-button");
        expect(button).toHaveLength(1);
    });

    it("correct props", () => {
        const wrapper = mount(<CustomButtonLink {...customButtonLinkProps} />);
        expect(wrapper?.prop("link")).toBe(customButtonLinkProps.link);
        expect(wrapper?.prop("size")).toBe(customButtonLinkProps.size);
        expect(wrapper?.prop("icon").toString()).toBe(customButtonLinkProps.icon.toString());
        expect(wrapper?.prop("text")).toBe(customButtonLinkProps.text);
    });
});
