import { Attribute, Attributes } from "t20-sheet-builder";
import { HumanRaceStepAttributesSelectorDTO, HumanRaceStepAttributesSelectorInterface } from "./HumanRaceStepAttributesSelector";

export class HumanRaceStepAttributesSelectorDecorator implements HumanRaceStepAttributesSelectorInterface {
  constructor(
    protected readonly selector: HumanRaceStepAttributesSelectorInterface
  ){}
  getAttributes(): Record<keyof Attributes, boolean> {
    return this.selector.getAttributes()
  }

  toggleAttribute(attribute: Attribute) {
    this.selector.toggleAttribute(attribute)
  }

  getDTO(): HumanRaceStepAttributesSelectorDTO {
    return this.selector.getDTO()
  }
}