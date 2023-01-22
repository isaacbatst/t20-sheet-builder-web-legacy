import { MutableRefObject } from "react"
import { useProjection } from "../../../../../hooks/useProjection"
import { HumanRaceStepAttributesSelectorInterface } from "./HumanRaceStepAttributesSelector"
import { HumanRaceStepAttributesSelectorProjectionDecorator } from "./HumanRaceStepAttributesSelectorProjectionDecorator"

export const useHumanRaceStepAttributesSelectorProjection = (ref: MutableRefObject<HumanRaceStepAttributesSelectorInterface>) => {
  const initialValue = HumanRaceStepAttributesSelectorProjectionDecorator.getProjection(ref.current)
  return useProjection(initialValue, (setProjection) => 
    new HumanRaceStepAttributesSelectorProjectionDecorator(ref.current, setProjection))
}
