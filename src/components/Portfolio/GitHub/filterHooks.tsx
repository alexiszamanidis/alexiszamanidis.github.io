import { useMemo } from "react";

type Repo = {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
};

export const useUniqueLanguages = (data: Repo[]) => {
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

    return { languages };
};

export const useFilteredData = (
    data: Repo[],
    debouncedSearch: string,
    selectedLanguage: string
) => {
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

    return { computedData };
};
