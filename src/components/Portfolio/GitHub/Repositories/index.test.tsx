import Repositories from "./";
import { Repo } from "./types";
import { shallow } from "enzyme";
import { findByDataTestIdAttribute } from "../../../../utilities";

let data: Repo[] = [
    {
        id: 1,
        name: "C Name",
        description: "C Description",
        language: "C",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "C url",
    },
    {
        id: 2,
        name: "C++ Name",
        description: "C++ Description",
        language: "C++",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "C++ url",
    },
    {
        id: 3,
        name: "C++ Name 2",
        description: "C++ Description 2",
        language: "C++",
        stargazers_count: 0,
        forks_count: 0,
        html_url: "C++ url 2",
    },
];

describe("Repositories", () => {
    it("render correctly", () => {
        const wrapper = shallow(<Repositories repositories={data} />);

        const repositories = findByDataTestIdAttribute(wrapper, "repositories");
        expect(repositories).toHaveLength(1);

        const repository = findByDataTestIdAttribute(wrapper, "repository");
        expect(repository).toHaveLength(3);

        const repositoryCardComponent = findByDataTestIdAttribute(
            wrapper,
            "repository-card-component"
        );
        expect(repositoryCardComponent).toHaveLength(3);
    });
});
