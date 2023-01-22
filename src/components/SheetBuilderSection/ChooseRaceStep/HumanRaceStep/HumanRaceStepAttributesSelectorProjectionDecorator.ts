import { Attribute } from "t20-sheet-builder";
import { HumanRaceStepAttributesSelectorDTO, HumanRaceStepAttributesSelectorInterface } from "./HumanRaceStepAttributesSelector";
import { HumanRaceStepAttributesSelectorDecorator } from "./HumanRaceStepAttributesSelectorDecorator";

export class HumanRaceStepAttributesSelectorProjectionDecorator extends HumanRaceStepAttributesSelectorDecorator {
  constructor(
    selector: HumanRaceStepAttributesSelectorInterface,
    readonly setProjection: (projection: HumanRaceStepAttributesSelectorDTO) => void
  ){
    super(selector)
  }

  toggleAttribute(attribute: Attribute) {
    this.selector.toggleAttribute(attribute)
    this.setProjection(this.selector.getDTO())
  }
}