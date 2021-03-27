import { FC, useMemo, useState } from "react";
import GitHubService from "../../../services/GitHub/GitHub";
import Alert from "@material-ui/lab/Alert";
import CardComponent from "./CardComponent";
import { useQuery } from "react-query";
import { TextField, Grid, FormControl, InputLabel, Select, Tooltip } from "@material-ui/core";
import useDebounce from "../../CustomHooks/useDebounce";
import { useStyles } from "./styles";

const GitHub: FC = () => {
    const classes = useStyles();

    const { isLoading, isError, data } = useQuery("gitHubRepositories", () =>
        GitHubService.getUserRepositories("alexiszamanidis").then(({ data }) => data)
    );

    const gitHubFaIcon = (
        <div className={`${classes.icon} fa-3x`}>
            <i className={"fa fa-github" + (isLoading === true ? " fa-spin" : "")}></i>
        </div>
    );

    const [search, setSearch] = useState("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const debouncedSearch = useDebounce(search, 500);

    const [selectedLanguage, setSelectedLanguage] = useState("");
    const handleLanguage = (e: any) => {
        setSelectedLanguage(e.target.value);
    };
    const languages = useMemo(() => {
        if (data === undefined) return [];
        let uniqueLanguages = new Set<string>(
            data
                .filter(
                    ({ language }: { language: string | null }) =>
                        language !== null && language !== ""
                )
                .map(({ language }: { language: string }) => language)
        );
        return Array.from(uniqueLanguages);
    }, [data]);

    const computedData = useMemo(() => {
        if (data === undefined) return [];
        let tempRepositories = data;
        if (debouncedSearch.length > 0) {
            tempRepositories = tempRepositories.filter(
                ({ name, description }: { name: string; description: string }) => {
                    return (
                        name.toString().toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                        description.toString().toLowerCase().includes(debouncedSearch.toLowerCase())
                    );
                }
            );
        }

        if (selectedLanguage.length > 0) {
            tempRepositories = tempRepositories.filter(
                ({ language }: { language: string | null }) => {
                    return language === selectedLanguage;
                }
            );
        }

        return tempRepositories;
    }, [data, debouncedSearch, selectedLanguage]);

    return (
        <div>
            {isLoading ? (
                gitHubFaIcon
            ) : isError ? (
                <Alert severity="error">Something happened</Alert>
            ) : (
                <div>
                    {gitHubFaIcon}
                    <div className={classes.searchFields}>
                        <Tooltip title="Filter by Repository Name, Description" placement="top">
                            <TextField
                                label="Search"
                                variant="outlined"
                                className={classes.search}
                                onChange={handleSearch}
                            />
                        </Tooltip>
                        <FormControl variant="outlined" className={classes.select}>
                            <InputLabel>Language</InputLabel>
                            <Select
                                native
                                label="Language"
                                value={selectedLanguage}
                                onChange={handleLanguage}
                            >
                                <option value="" />
                                {languages.map((language, index) => {
                                    return (
                                        <option key={index} value={language}>
                                            {language}
                                        </option>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </div>
                    <Grid container spacing={3} className={classes.grid}>
                        {computedData.map((repo: any) => {
                            return (
                                <Grid item xs={12} sm={4} md={4} key={repo.id}>
                                    <CardComponent
                                        name={repo.name}
                                        description={repo.description}
                                        language={repo.language}
                                        stargazers_count={repo.stargazers_count}
                                        forks_count={repo.forks_count}
                                        html_url={repo.html_url}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default GitHub;
