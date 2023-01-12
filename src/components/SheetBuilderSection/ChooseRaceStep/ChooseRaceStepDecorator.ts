import { RaceName } from "t20-sheet-builder";
import { ChooseRaceStepDTO, ChooseRaceStepInterface } from "./ChooseRaceStep";
import { RaceStepInterface } from "./RaceStep";

export class ChooseRaceStepDecorator implements ChooseRaceStepInterface {
  constructor(protected readonly chooseRaceStep: ChooseRaceStepInterface){}
  makeRaceStep(raceName: RaceName): RaceStepInterface {
    return this.chooseRaceStep.makeRaceStep(raceName)
  }

  getDTO(): ChooseRaceStepDTO {
    return this.chooseRaceStep.getDTO();
  }

  getRace() {
    return this.chooseRaceStep.getRace()
  }

  selectRace(raceStep: RaceStepInterface) {
    this.chooseRaceStep.selectRace(raceStep)
  }
}