import axios from "axios";

class GitLabService {
    basePath: string;

    constructor() {
        this.basePath = "https://gitlab.com/api/v4";
    }

    getUserData(username: string) {
        return axios.get(this.basePath + "/users?username=" + username);
    }

    getUserProjects(username: string) {
        return axios.get(this.basePath + "/users/" + username + "/projects");
    }
}

export default new GitLabService();
