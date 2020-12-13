export const getOptions = (baseUrl: string, endPoint: string, parameters: string[][]): object => {
    return {
        url: `${baseUrl}${endPoint}?` + new URLSearchParams(parameters).toString(),
        method: "GET",
    };
};