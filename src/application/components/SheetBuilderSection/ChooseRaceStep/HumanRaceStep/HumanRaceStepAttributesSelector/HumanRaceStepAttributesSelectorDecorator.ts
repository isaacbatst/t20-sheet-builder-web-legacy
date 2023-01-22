import { Attribute, Attributes } from "t20-sheet-builder";
import { HumanRaceStepAttributesSelectorInterface } from "./HumanRaceStepAttributesSelector";

export class HumanRaceStepAttributesSelectorDecorator implements HumanRaceStepAttributesSelectorInterface {
  constructor(
    protected readonly selector: HumanRaceStepAttributesSelectorInterface
  ){}
  getAttributes(): Record<keyof Attributes, boolean> {
    return this.selector.getAttributes()
  }

  getSelectedAttributes(): (keyof Attributes)[] {
    return this.selector.getSelectedAttributes()
  }

  toggleAttribute(attribute: Attribute) {
    this.selector.toggleAttribute(attribute)
  }

  getPreview(attribute: keyof Attributes, initialAttributes: Attributes): number {
    return this.selector.getPreview(attribute, initialAttributes)
  }
}