import { RaceName } from "t20-sheet-builder";
import { DwarfRaceStep } from "./DwarfRaceStep/DwarfRaceStep";
import { HumanRaceStep } from "./HumanRaceStep/HumanRaceStep";
import { HumanRaceStepAttributesSelector } from "./HumanRaceStep/HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelector";
import { HumanRaceStepProjectionDecorator } from "./HumanRaceStep/HumanRaceStepDecoratorProjection";
import { HumanRaceStepVersatile } from "./HumanRaceStep/HumanRaceStepVersatile";
import { RaceStepDTO, RaceStepInterface } from "./RaceStep";
import { RaceStepFactoryInterface } from "./RaceStepFactory";

export class RaceStepProjectionDecoratorFactory implements RaceStepFactoryInterface {
  constructor(readonly raceStep: RaceStepInterface, readonly setProjection: (raceStep: RaceStepDTO) => void){}

  make(name: RaceName): RaceStepInterface {
    if(name === RaceName.dwarf) {
      return new DwarfRaceStep()
    }

    if(name === RaceName.human) {
      return new HumanRaceStepProjectionDecorator(
        new HumanRaceStep(
          new HumanRaceStepAttributesSelector(),
          new HumanRaceStepVersatile()
        ),
        this.setProjection
      )
    }

    throw new Error('UNKNOWN_RACE')
  }
}