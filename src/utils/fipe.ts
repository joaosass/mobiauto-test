const FIPE_API_BASE_URL = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
const FIPE_API_MODEL_PATH = "modelos";
const FIPE_API_YEAR_PATH = "anos";

export const getBrands = async () => {
  const apiResponse = await fetch(FIPE_API_BASE_URL);
  return await apiResponse.json();
}

export const getModels = async (brand: string) => {
  const apiResponse = await fetch(`${FIPE_API_BASE_URL}/${brand}/${FIPE_API_MODEL_PATH}`);
  return await apiResponse.json();
}

export const getModelYears = async (brand: string, model: string) => {
  const apiResponse = await fetch(`${FIPE_API_BASE_URL}/${brand}/${FIPE_API_MODEL_PATH}/${model}/${FIPE_API_YEAR_PATH}`);
  return await apiResponse.json();
}

export const getPrice = async (brand: string, model: string, year: string) => {
  const apiResponse = await fetch(`${FIPE_API_BASE_URL}/${brand}/${FIPE_API_MODEL_PATH}/${model}/${FIPE_API_YEAR_PATH}/${year}`);
  return await apiResponse.json();
}