export const trimString = (string: string | null, limit: number): string => {
    return string !== null
        ? string.length <= limit
            ? string
            : string.substring(0, limit) + "..."
        : "";
};

export const calculateAge = (dateOfBirth: string): number => {
    let todayDate = new Date();
    let todayDay = todayDate.getDate();
    let todayMonth = todayDate.getMonth();
    let todayYear = todayDate.getFullYear();

    let birthDate = new Date(dateOfBirth);
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth();
    let birthYear = birthDate.getFullYear();

    let age = todayYear - birthYear;

    if (todayMonth > birthMonth || (todayMonth === birthMonth && todayDay >= birthDay)) return age;
    else return age - 1;
};
