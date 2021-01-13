export const getOptions = (baseUrl: string, endPoint: string, parameters?: any): object => {
    return {
        url: `${baseUrl}${endPoint}?` + new URLSearchParams(parameters).toString(),
        method: "GET",
        headers: {
            Accept: "application/vnd.github.v3+json",
        },
    };
};
