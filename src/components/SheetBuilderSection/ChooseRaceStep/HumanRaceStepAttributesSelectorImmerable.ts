import { immerable } from "immer";
import { HumanRaceStepAttributesSelector } from "./HumanRaceStepAttributesSelector";

export class HumanRaceStepAttributesSelectorImmerable extends HumanRaceStepAttributesSelector {
  [immerable] = true
}