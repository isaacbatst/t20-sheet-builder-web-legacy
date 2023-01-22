import { MutableRefObject } from "react"
import { useProjection } from "../../../../../hooks/useProjection"
import { HumanRaceStepVersatileInterface } from "./HumanRaceStepVersatile"
import { HumanRaceStepVersatileProjectionDecorator } from "./HumanRaceStepVersatileProjectionDecorator"

export const useHumanRaceStepVersatileProjection = (ref: MutableRefObject<HumanRaceStepVersatileInterface>) => {
  const initialValue = HumanRaceStepVersatileProjectionDecorator.getProjection(ref.current)
  return useProjection(initialValue, (setProjection) => {
    return new HumanRaceStepVersatileProjectionDecorator(ref.current, setProjection)
  })
}