export interface Repo {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
}

export interface RepoProps {
    repositories: Repo[];
    loading: boolean;
}
