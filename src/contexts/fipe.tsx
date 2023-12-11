import { getBrands, getModelYears, getModels, getPrice } from "@/utils";
import { useRouter } from "next/router";
import type { Dispatch, ReactNode } from "react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type FipeItem = {
  codigo: string;
  nome: string;
}

type FipePrice = {
  Modelo: string;
  Valor: string;
}

interface FipeContextProps {
  brands: FipeItem[];
  loadings: {
    brandLoading: boolean,
    modelLoading: boolean,
    modelYearLoading: boolean,
    priceLoading: boolean,
  },
  models: FipeItem[];
  modelsYears: FipeItem[];
  price: FipePrice;
  selectedModel: string;
  selectedModelYear: string;
  fetchPrice: () => void;
  setSelectedBrand: Dispatch<string>;
  setSelectedModel: Dispatch<string>;
  setSelectedModelYear: Dispatch<string>;
}

const FipeContext = createContext<FipeContextProps>({} as FipeContextProps);

export const useFipe = () => useContext(FipeContext);

interface FipeProviderProps {
  children: ReactNode;
}

export const FipeProvider = ({ children }: FipeProviderProps) => {
  const [brands, setBrands] = useState([]);
  const [brandLoading, setBrandLoading] = useState(true);
  const [modelLoading, setModelLoading] = useState(false);
  const [modelYearLoading, setModelYearLoading] = useState(false);
  const [priceLoading, setPriceLoading] = useState(false);
  const [models, setModels] = useState([]);
  const [modelsYears, setModelsYears] = useState([]);
  const [price, setPrice] = useState<FipePrice>({} as FipePrice);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedModelYear, setSelectedModelYear] = useState('');

  const router = useRouter();

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async() => {
    setBrands(await getBrands());
    setBrandLoading(false);
  };

  const fetchModels = async (brand: string) => {
    setModels((await getModels(brand)).modelos);
  }

  const fetchModelYear = useCallback(async (model: string) => {
    setModelsYears((await getModelYears(selectedBrand, model)));
  }, [selectedBrand]);

  const fetchPrice = async () => {
    setPriceLoading(true);
    router.push("resultado");
    setPrice(await getPrice(selectedBrand, selectedModel, selectedModelYear));
    setPriceLoading(false);
  }

  useEffect(() => {
    if (selectedBrand) {
      setModelLoading(true);
      fetchModels(selectedBrand);
      setModelLoading(false);
    }
    else {
      setSelectedModel('');
      setSelectedModelYear('');
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      setModelYearLoading(true);
      fetchModelYear(selectedModel);
      setModelYearLoading(false);
    } else {
      setSelectedModelYear('');
    }
  }, [selectedModel, fetchModelYear]);

  return <FipeContext.Provider value={{
    brands,
    loadings: {
      brandLoading,
      modelLoading,
      modelYearLoading,
      priceLoading,
    },
    models,
    modelsYears,
    price,
    selectedModel,
    selectedModelYear,
    fetchPrice,
    setSelectedBrand,
    setSelectedModel,
    setSelectedModelYear,
  }}>
    {children}
  </FipeContext.Provider>
}