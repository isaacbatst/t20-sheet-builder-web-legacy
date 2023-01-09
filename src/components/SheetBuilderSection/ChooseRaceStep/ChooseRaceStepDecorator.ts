import { RaceName } from "t20-sheet-builder";
import { ChooseRaceStepDTO, ChooseRaceStepInterface } from "./ChooseRaceStep";
import { RaceStepFactory } from "./RaceStepFactory";

export class ChooseRaceStepDecorator implements ChooseRaceStepInterface {
  constructor(protected readonly chooseRaceStep: ChooseRaceStepInterface){}

  getDTO(): ChooseRaceStepDTO {
    return this.chooseRaceStep.getDTO();
  }

  getRace() {
    return this.chooseRaceStep.getRace()
  }

  selectRace(race: RaceName, factory: RaceStepFactory) {
    this.chooseRaceStep.selectRace(race, factory)
  }
}