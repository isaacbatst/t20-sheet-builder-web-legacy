import { HumanRaceStep, HumanRaceStepDTO } from "./HumanRaceStep";
import { HumanRaceStepAttributesSelectorInterface } from "./HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelector";
import { HumanRaceStepAttributesSelectorProjectionDecorator } from "./HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelectorProjectionDecorator";
import { HumanRaceStepDecorator } from "./HumanRaceStepDecorator";
import { HumanRaceStepVersatileInterface } from "./HumanRaceStepVersatile";
import { HumanRaceStepVersatileProjectionDecorator } from "./HumanRaceStepVersatileProjectionDecorator";

export class HumanRaceStepProjectionDecorator extends HumanRaceStepDecorator {
  constructor(humanRaceStep: HumanRaceStep, private setProjection: (projection: HumanRaceStepDTO) => void){
    super(humanRaceStep)
  }

  getSelector(): HumanRaceStepAttributesSelectorInterface {
    const selector = super.getSelector();

    return new HumanRaceStepAttributesSelectorProjectionDecorator(
      selector, 
      (selector) => this.setProjection({
        ...this.getDTO(),
        selector
      })
    )
  }

  getVersatile(): HumanRaceStepVersatileInterface {
    const versatile = super.getVersatile()

    return new HumanRaceStepVersatileProjectionDecorator(
      versatile,
      (versatile) => this.setProjection({
        ...this.getDTO(),
        versatile
      })
    )
  }
}