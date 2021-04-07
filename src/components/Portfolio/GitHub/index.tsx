import { FC } from "react";
import { useQuery } from "react-query";
import Repositories from "./Repositories";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core";
import useDebounce from "../../CustomHooks/useDebounce";
import GitHubService from "../../../services/GitHub/GitHub";
import { useGitHubFaIconSpinner } from "./useGitHubFaIconSpinner";
import { useFilteredData, useSearch, useUniqueLanguages } from "./filterHooks";
import { TextField, FormControl, InputLabel, Select, Tooltip } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "300px",
        margin: "30px",
    },
    searchFields: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // eslint-disable-next-line
        ["@media (min-width:600px)"]: {
            flexDirection: "row",
        },
    },
    search: {
        width: "100%",
        margin: "5px 5px 5px 0px",
        // eslint-disable-next-line
        ["@media (min-width:600px)"]: {
            width: "30%",
        },
    },
    select: {
        width: "100%",
        margin: "5px 5px 5px 0px",
        // eslint-disable-next-line
        ["@media (min-width:600px)"]: {
            width: "30%",
        },
    },
});

const GitHub: FC = () => {
    const classes = useStyles();

    const { isLoading, isError, data } = useQuery("gitHubRepositories", () =>
        GitHubService.getUserRepositories("alexiszamanidis").then(({ data }) => data)
    );

    const { search, handleSearch } = useSearch();
    const debouncedSearch = useDebounce(search, 500);
    const { selectedLanguage, handleLanguage, languages } = useUniqueLanguages(data);
    const { computedData } = useFilteredData(data, debouncedSearch, selectedLanguage);

    const gitHubFaIcon = useGitHubFaIconSpinner(isLoading);

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
                                value={search}
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
                    <Repositories repositories={computedData} />
                </div>
            )}
        </div>
    );
};

export default GitHub;
