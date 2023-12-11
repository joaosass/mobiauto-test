import { useState } from "react"
import { maskify } from "@/utils";

const ExerciseOne = () => {
  const [usmaskedText, setUnmaskedText] = useState('');

  return (
    <>
      <label>Texto para ser mascarado </label>
      <input value={maskify(usmaskedText)} onChange={({ target }) => setUnmaskedText(target.value)} />
    </>
  )
}

export default ExerciseOne;