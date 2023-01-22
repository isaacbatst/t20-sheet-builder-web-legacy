import { Human, RaceName } from "t20-sheet-builder";
import { HumanRaceStep, HumanRaceStepDTO, HumanRaceStepInterface } from "./HumanRaceStep";
import { HumanRaceStepAttributesSelectorInterface } from "./HumanRaceStepAttributesSelector";
import { HumanRaceStepVersatileInterface } from "./HumanRaceStepVersatile";

export class HumanRaceStepDecorator implements HumanRaceStepInterface {
  readonly raceName: RaceName = this.humanRaceStep.raceName

  constructor(
    protected readonly humanRaceStep: HumanRaceStep
  ){}
  getDTO(): HumanRaceStepDTO {
    return this.humanRaceStep.getDTO()
  }

  getSelector(): HumanRaceStepAttributesSelectorInterface {
    return this.humanRaceStep.getSelector()
  }
  getVersatile(): HumanRaceStepVersatileInterface {
    return this.humanRaceStep.getVersatile()
  }

  build(): Human {
    return this.humanRaceStep.build()
  }
}