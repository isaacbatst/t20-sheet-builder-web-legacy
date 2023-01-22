import { Attribute } from "t20-sheet-builder";
import { HumanRaceStepAttributesSelectorInterface } from "./HumanRaceStepAttributesSelector";
import { HumanRaceStepAttributesSelectorDecorator } from "./HumanRaceStepAttributesSelectorDecorator";

export type HumanRaceStepAttributesSelectorDTO = {
  attributes: Record<Attribute, boolean>
}
export class HumanRaceStepAttributesSelectorProjectionDecorator extends HumanRaceStepAttributesSelectorDecorator {
  static getProjection(selector: HumanRaceStepAttributesSelectorInterface): HumanRaceStepAttributesSelectorDTO {
    return {
      attributes: selector.getAttributes()
    }
  }
  
  constructor(
    selector: HumanRaceStepAttributesSelectorInterface,
    readonly setProjection: (projection: HumanRaceStepAttributesSelectorDTO) => void
  ){
    super(selector)
  }

  toggleAttribute(attribute: Attribute) {
    this.selector.toggleAttribute(attribute)
    this.setProjection(this.getProjection())
  }

  private getProjection() {
    return HumanRaceStepAttributesSelectorProjectionDecorator.getProjection(this.selector)
  }
}