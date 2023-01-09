import { RaceName } from "t20-sheet-builder";
import { DwarfRaceStep } from "./DwarfRaceStep";
import { HumanRaceStep } from "./HumanRaceStep";
import { HumanRaceStepAttributesSelector } from "./HumanRaceStepAttributesSelector";
import { HumanRaceStepVersatile } from "./HumanRaceStepVersatile";
import { RaceStepInterface } from "./RaceStep";

export type RaceStepFactoryInterface = {
  make(name: RaceName): RaceStepInterface
}

export class RaceStepFactory implements RaceStepFactoryInterface {
  make(name: RaceName): RaceStepInterface {
    if(name === RaceName.dwarf) {
      return new DwarfRaceStep()
    }

    if(name === RaceName.human) {
      return new HumanRaceStep(
        new HumanRaceStepAttributesSelector(),
        new HumanRaceStepVersatile()
      )
    }

    throw new Error('UNKNOWN_RACE')
  }
}