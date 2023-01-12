import { RaceName } from "t20-sheet-builder";
import { RaceStepInterface } from "./RaceStep";
import { RaceStepFactory } from "./RaceStepFactory";

export type ChooseRaceStepInterface = {
  getRace(): RaceStepInterface | undefined
  selectRace(raceStep: RaceStepInterface): void
  getDTO(): ChooseRaceStepDTO
  makeRaceStep(raceName: RaceName): RaceStepInterface 
}

export type ChooseRaceStepDTO = {
  race?: RaceName
}

export class ChooseRaceStep implements ChooseRaceStepInterface {
  private raceStep?: RaceStepInterface

  getDTO(): ChooseRaceStepDTO {
    return {
      race: this.raceStep?.raceName
    }
  }

  getRace(): RaceStepInterface | undefined {
    return this.raceStep
  }

  selectRace(raceStep: RaceStepInterface) {
    this.raceStep = raceStep
  }

  makeRaceStep(raceName: RaceName): RaceStepInterface {
    return new RaceStepFactory().make(raceName)
  }
}