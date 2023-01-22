import { useRef } from "react"
import { ChooseRaceStep } from "./ChooseRaceStep"

export const useChooseRaceStep = () => {
  const ref = useRef<ChooseRaceStep>()

  if(!ref.current){
    ref.current = new ChooseRaceStep()
  }

  return ref.current
}
