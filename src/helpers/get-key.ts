export const getKey = (path: string): string => {
    const currentOption = path.replace("/home", "").replace("/", "");
    if (currentOption === "") return "home";
    return currentOption;
};