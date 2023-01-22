import { MutableRefObject, useState } from "react"
import { HumanRaceStepAttributesSelectorInterface } from "./HumanRaceStepAttributesSelector"
import { HumanRaceStepAttributesSelectorProjectionDecorator } from "./HumanRaceStepAttributesSelectorProjectionDecorator"

export const useHumanRaceStepAttributesSelectorProjection = (ref: MutableRefObject<HumanRaceStepAttributesSelectorInterface>) => {
  const [projection, setProjection] = useState(HumanRaceStepAttributesSelectorProjectionDecorator.getProjection(ref.current))

  return new HumanRaceStepAttributesSelectorProjectionDecorator(ref.current, setProjection)
}