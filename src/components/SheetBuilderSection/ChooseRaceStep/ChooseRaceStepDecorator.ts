import { RaceInterface, RaceName } from "t20-sheet-builder";
import { ChooseRaceStepDTO, ChooseRaceStepInterface } from "./ChooseRaceStep";
import { RaceStepInterface } from "./RaceStep";

export class ChooseRaceStepDecorator implements ChooseRaceStepInterface {
  constructor(protected readonly chooseRaceStep: ChooseRaceStepInterface){}

  confirm(raceStep: RaceStepInterface | undefined): void {
    this.chooseRaceStep.confirm(raceStep)
  }

  makeRaceStep(raceName: RaceName): RaceStepInterface {
    return this.chooseRaceStep.makeRaceStep(raceName)
  }

  getRace(): RaceInterface | undefined {
    return this.chooseRaceStep.getRace()
  }

  getDTO(): ChooseRaceStepDTO {
    return this.chooseRaceStep.getDTO();
  }

  getRaceStep() {
    return this.chooseRaceStep.getRaceStep()
  }

  selectRace(raceStep: RaceStepInterface) {
    this.chooseRaceStep.selectRace(raceStep)
  }
}