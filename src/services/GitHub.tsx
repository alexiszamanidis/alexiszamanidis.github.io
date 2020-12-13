import axios from "axios";

// const clientId = "";
// const clientSecret = "";
// const oauth = "clientId="+{clientId}+"&clientSecret"+{clientSecret};

class GitHubService {
    basePath: string;

    constructor() {
        this.basePath = "https://api.github.com";
    }

    getUserData(username: string) {
        return axios.get(this.basePath + "/users/" + username);
    }

    getUserRepositories(username: string) {
        return axios.get(this.basePath + "/users/" + username + "/repos");
    }
}

export default new GitHubService();
