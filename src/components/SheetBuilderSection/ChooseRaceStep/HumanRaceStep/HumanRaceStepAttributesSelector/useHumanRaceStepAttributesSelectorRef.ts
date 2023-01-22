import { useRef } from "react"
import { HumanRaceStepAttributesSelector } from "./HumanRaceStepAttributesSelector"

export const useHumanRaceStepAttributesSelectorRef = () => {
  const ref = useRef(new HumanRaceStepAttributesSelector())

  return ref;
}