import axios from "axios";
import { getOptions } from "../config";

// const clientId = "";
// const clientSecret = "";
// const oauth = "clientId="+{clientId}+"&clientSecret"+{clientSecret};

class GitHubService {
    basePath: string;

    constructor() {
        this.basePath = "https://api.github.com";
    }

    getUserData(username: string) {
        return axios(getOptions(`${this.basePath}`, `/users/${username}`));
    }

    getUserRepositories(username: string) {
        return axios(getOptions(`${this.basePath}`, `/users/${username}/repos`));
    }

    getRepositoryTopics(username: string, repository: string) {
        return axios(getOptions(`${this.basePath}`, `/users/${username}/${repository}/topics`));
    }
}

export default new GitHubService();
