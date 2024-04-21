type menuOptions = "" | "all" | "dog" | "cat";

export const createMenu = (active: "" | "all" | "dog" | "cat") => {
    let returnOption = {
        all: false,
        dog: false,
        cat: false
    }

    if (active !== "") {
        returnOption[active] = true;
    }
    return returnOption;
}