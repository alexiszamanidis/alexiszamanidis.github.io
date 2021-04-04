import { useState, useMemo } from "react";

export const useSearch = () => {
    const [search, setSearch] = useState("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return { search, setSearch, handleSearch };
};

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
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const handleLanguage = (e: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedLanguage(e.target.value as string);
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

    return { selectedLanguage, setSelectedLanguage, handleLanguage, languages };
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
