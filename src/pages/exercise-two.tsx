import { updateData } from "@/utils";

const INITIAL_DATA = {
  name: "João Sass",
  country: "Brasil",
  age: 28,
}
const UPDATED_DATA = {
  name: "João Less",
  country: "Brazil",
}
const WRONG_DATA = {
  name: "João Styled",
  email: "j_henrique95@outlook.com",
}

const ExerciseTwo = () => {

  return (
    <>
      <pre>{JSON.stringify(updateData(INITIAL_DATA, UPDATED_DATA), null, 2)}</pre>
      <pre>{JSON.stringify(updateData(INITIAL_DATA, WRONG_DATA), null, 2)}</pre>
    </>
  )
}

export default ExerciseTwo;