const CHARACTERS_UNMASKED_COUNT = 4;
const MASK_CHARACTER = '#'

const maskCharacters = (textToMask: string) => textToMask.slice(0, -CHARACTERS_UNMASKED_COUNT).replace(/./g, MASK_CHARACTER);

const getLastCharacters = (textToSlice: string, quantity: number) => textToSlice.slice(-quantity);

export const maskify = (textToMask: string) => {
  return `${maskCharacters(textToMask)}${getLastCharacters(textToMask, CHARACTERS_UNMASKED_COUNT)}`;
};
