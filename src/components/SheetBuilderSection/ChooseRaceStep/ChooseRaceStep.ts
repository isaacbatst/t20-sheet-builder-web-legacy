import { RaceName } from "t20-sheet-builder";
import { RaceStepInterface } from "./RaceStep";
import { RaceStepFactory } from "./RaceStepFactory";

export type ChooseRaceStepInterface = {
  getRace(): RaceStepInterface | undefined
  selectRace(race: RaceName, factory: RaceStepFactory): void
  getDTO(): ChooseRaceStepDTO
}

export type ChooseRaceStepDTO = {
  race?: RaceName
}

export class ChooseRaceStep implements ChooseRaceStepInterface {
  private raceStep?: RaceStepInterface

  constructor(){}

  getDTO(): ChooseRaceStepDTO {
    return {
      race: this.raceStep?.raceName
    }
  }

  getRace(): RaceStepInterface | undefined {
    return this.raceStep
  }

  selectRace(race: RaceName, factory: RaceStepFactory) {
    this.raceStep = factory.make(race);
  }
}