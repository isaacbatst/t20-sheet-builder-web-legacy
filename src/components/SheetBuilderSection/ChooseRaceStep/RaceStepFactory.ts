import { RaceName } from "t20-sheet-builder";
import { DwarfRaceStep } from "./DwarfRaceStep/DwarfRaceStep";
import { HumanRaceStep } from "./HumanRaceStep/HumanRaceStep";
import { HumanRaceStepAttributesSelector } from "./HumanRaceStep/HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelector";
import { HumanRaceStepVersatile } from "./HumanRaceStep/HumanRaceStepVersatile";
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