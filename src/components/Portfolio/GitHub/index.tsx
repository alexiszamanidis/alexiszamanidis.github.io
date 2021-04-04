import { FC } from "react";
import GitHubService from "../../../services/GitHub/GitHub";
import Alert from "@material-ui/lab/Alert";
import { useQuery } from "react-query";
import { TextField, FormControl, InputLabel, Select, Tooltip } from "@material-ui/core";
import useDebounce from "../../CustomHooks/useDebounce";
import { useStyles } from "./styles";
import { useFilteredData, useSearch, useUniqueLanguages } from "./filterHooks";
import Repositories from "./Repositories";

const GitHub: FC = () => {
    const classes = useStyles();

    const { isLoading, isError, data } = useQuery("gitHubRepositories", () =>
        GitHubService.getUserRepositories("alexiszamanidis").then(({ data }) => data)
    );

    const { search, handleSearch } = useSearch();
    const debouncedSearch = useDebounce(search, 500);
    const { selectedLanguage, handleLanguage, languages } = useUniqueLanguages(data);
    const { computedData } = useFilteredData(data, debouncedSearch, selectedLanguage);

    const gitHubFaIcon = (
        <div className={`${classes.icon} fa-3x`}>
            <i className={"fa fa-github" + (isLoading === true ? " fa-spin" : "")}></i>
        </div>
    );

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
