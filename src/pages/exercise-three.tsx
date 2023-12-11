import { Parsed_Character, getRickMortyData } from "@/utils";
import { useEffect, useState } from "react";

const ExerciseThree = () => {
  const [apiData, setApiData] = useState<Parsed_Character[]>();

  useEffect(() => {
    getApiData()
  }, []);

  const getApiData = async () => {
    setApiData(await getRickMortyData());
  }

  return (
    <>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
      {apiData?.map(({ avatar, especie, genero, nome}) => <div key={nome}>
        <img alt="" src={avatar} />
        <h1>{nome}</h1>
        <p>{especie}</p>
        <p>{genero}</p>
        <hr />
      </div>)}
    </>
  )
}

export default ExerciseThree;