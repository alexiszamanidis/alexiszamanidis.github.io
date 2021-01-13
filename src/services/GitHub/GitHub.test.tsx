import GitHubService from "./GitHub";

const getUserData = (userName: string): any => {
    return GitHubService.getUserData(userName).then(({ data }) => {
        return {
            name: data.name,
            login: data.login,
            url: data.url,
        };
    });
};

it("getUserData: Get GitHub user data", async () => {
    const userName = "alexiszamanidis";
    const response = await getUserData(userName);
    expect(response.name).toBe("Alexis Zamanidis");
    expect(response.login).toBe("alexiszamanidis");
    expect(response.url).toBe("https://api.github.com/users/alexiszamanidis");
});
