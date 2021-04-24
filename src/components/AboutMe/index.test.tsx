import AboutMe from ".";
import { shallow } from "enzyme";
import { findByDataTestIdAttribute } from "../../utilities";

describe("AboutMe", () => {
    it("render correctly", () => {
        const wrapper = shallow(<AboutMe />);

        const aboutMe = findByDataTestIdAttribute(wrapper, "about-me");
        expect(aboutMe).toHaveLength(1);

        const personal = findByDataTestIdAttribute(wrapper, "personal");
        expect(personal).toHaveLength(1);

        const education = findByDataTestIdAttribute(wrapper, "education");
        expect(education).toHaveLength(1);

        const experience = findByDataTestIdAttribute(wrapper, "experience");
        expect(experience).toHaveLength(1);

        const passionateAbout = findByDataTestIdAttribute(wrapper, "passionate-about");
        expect(passionateAbout).toHaveLength(1);

        const hobbies = findByDataTestIdAttribute(wrapper, "hobbies");
        expect(hobbies).toHaveLength(1);

        const contact = findByDataTestIdAttribute(wrapper, "contact");
        expect(contact).toHaveLength(1);

        const buttonLinks = findByDataTestIdAttribute(wrapper, "button-links");
        expect(buttonLinks).toHaveLength(1);
    });
});
