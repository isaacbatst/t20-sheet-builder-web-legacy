import { MutableRefObject, useRef } from "react"
import { HumanRaceStepVersatile, HumanRaceStepVersatileInterface } from "./HumanRaceStepVersatile"

export const useHumanRaceStepVersatileRef = () => {
  const ref = useRef<HumanRaceStepVersatileInterface>()

  if(!ref.current) {
    ref.current = new HumanRaceStepVersatile();
  }

  return ref as MutableRefObject<HumanRaceStepVersatileInterface>
}