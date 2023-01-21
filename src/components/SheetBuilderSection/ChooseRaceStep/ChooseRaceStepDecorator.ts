import { RaceInterface, RaceName } from "t20-sheet-builder";
import { ChooseRaceStepInterface } from "./ChooseRaceStep";
import { RaceStepInterface } from "./RaceStep";

export class ChooseRaceStepDecorator implements ChooseRaceStepInterface {
  constructor(protected readonly chooseRaceStep: ChooseRaceStepInterface){}

  confirm(): void {
    this.chooseRaceStep.confirm()
  }

  makeRaceStep(raceName: RaceName): RaceStepInterface {
    return this.chooseRaceStep.makeRaceStep(raceName)
  }

  getRace(): RaceInterface | undefined {
    return this.chooseRaceStep.getRace()
  }

  getRaceStep() {
    return this.chooseRaceStep.getRaceStep()
  }

  selectRace(raceStep: RaceStepInterface) {
    this.chooseRaceStep.selectRace(raceStep)
  }
}