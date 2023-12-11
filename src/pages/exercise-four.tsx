import { checkIfTheFirstLetterisUppercase } from "@/utils";

const ExerciseFour = () => {
  return (
    <>
      <pre>Este deve retornar verdadeiro: {checkIfTheFirstLetterisUppercase("Este deve retornar verdadeiro") ? "true" : "false"}</pre>
      <pre>este não deve: {checkIfTheFirstLetterisUppercase("este não deve") ? "true" : "false"}</pre>
      <pre>3STE TBM NÃO: {checkIfTheFirstLetterisUppercase("3STE TBM NÃO") ? "true" : "false"}</pre>
    </>
  )
}

export default ExerciseFour;