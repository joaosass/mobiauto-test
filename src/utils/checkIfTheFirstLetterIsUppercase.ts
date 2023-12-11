const ONLY_UPPERCASE_LETTERS = /[A-Z]/;

export const checkIfTheFirstLetterisUppercase = (textToCheck: string) => ONLY_UPPERCASE_LETTERS.test(textToCheck[0]);