const CHARACTER_IDS = "1,2,3,4,5"
const RICK_MORTY_API_URL = `https://rickandmortyapi.com/api/character/${CHARACTER_IDS}`;

type Character = {
  gender: string;
  image: string;
  name: string;
  species: string;
}

export type Parsed_Character = {
  avatar: string;
  genero: string;
  nome: string;
  especie: string;
}

const parseApiData = (apiData: Character[]) => apiData.map(({
  gender: genero,
  image: avatar,
  name: nome,
  species: especie
}) => ({ avatar, especie, genero, nome, }))

export const getRickMortyData = async () => {
  const apiResponse = await fetch(RICK_MORTY_API_URL);
  const apiData = await apiResponse.json();

  return parseApiData(apiData);
};