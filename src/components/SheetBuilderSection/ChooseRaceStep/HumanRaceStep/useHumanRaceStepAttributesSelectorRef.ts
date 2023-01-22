import { useRef } from "react"
import { HumanRaceStepAttributesSelector } from "./HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelector"

export const useHumanRaceStepAttributesSelectorRef = () => {
  const ref = useRef(new HumanRaceStepAttributesSelector())

  return ref;
}