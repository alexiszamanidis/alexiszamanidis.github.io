import CardComponent from "./";
import { shallow, mount } from "enzyme";
import { findByDataTestIdAttribute } from "../../../../../utilities";

interface CardComponentProps {
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
}

describe("CardComponent", () => {
    let cardComponentProps: CardComponentProps;

    beforeEach(() => {
        cardComponentProps = {
            name: "name test",
            description: "description test",
            language: "language test",
            stargazers_count: 5,
            forks_count: 10,
            html_url: "html_url test",
        };
    });

    it("render correctly", () => {
        const wrapper = shallow(<CardComponent {...cardComponentProps} />);

        const cardComponent = findByDataTestIdAttribute(wrapper, "card-component");
        expect(cardComponent).toHaveLength(1);

        const cardComponentName = findByDataTestIdAttribute(wrapper, "card-component-name");
        expect(cardComponentName).toHaveLength(1);

        const cardComponentDescription = findByDataTestIdAttribute(
            wrapper,
            "card-component-description"
        );
        expect(cardComponentDescription).toHaveLength(1);

        const cardComponentLanguageStarFork = findByDataTestIdAttribute(
            wrapper,
            "card-component-language-star-fork"
        );
        expect(cardComponentLanguageStarFork).toHaveLength(1);
        expect(cardComponentLanguageStarFork?.text()).toBe(
            `language: ${cardComponentProps.language}  ${cardComponentProps.stargazers_count}  ${cardComponentProps.forks_count} `
        );

        const cardComponentButton = findByDataTestIdAttribute(
            wrapper,
            "card-component-custom-button-link"
        );
        expect(cardComponentButton).toHaveLength(1);
    });

    it("correct props", () => {
        const wrapper = mount(<CardComponent {...cardComponentProps} />);
        expect(wrapper?.prop("name")).toBe(cardComponentProps.name);
        expect(wrapper?.prop("description")).toBe(cardComponentProps.description);
        expect(wrapper?.prop("language")).toBe(cardComponentProps.language);
        expect(wrapper?.prop("stargazers_count")).toBe(cardComponentProps.stargazers_count);
        expect(wrapper?.prop("forks_count")).toBe(cardComponentProps.forks_count);
        expect(wrapper?.prop("html_url")).toBe(cardComponentProps.html_url);
    });
});
