import { RaceName } from "t20-sheet-builder";
import { ChooseRaceStepDTO, ChooseRaceStepInterface } from "./ChooseRaceStep";
import { ChooseRaceStepDecorator } from "./ChooseRaceStepDecorator";
import { RaceStepFactory } from "./RaceStepFactory";
import { RaceStepProjectionDecoratorFactory } from "./RaceStepProjectionDecoratorFactory";

export class ChooseRaceStepProjectionDecorator extends ChooseRaceStepDecorator {
  constructor(
    chooseRaceStep: ChooseRaceStepInterface,
    private readonly setProjection: (projection: ChooseRaceStepDTO) => void
  ){
    super(chooseRaceStep)
  }

  getRace() {
    return super.getRace()
  }

  selectRace(race: RaceName) {
    const raceStep = new RaceStepFactory().make(race)
    const factory = new RaceStepProjectionDecoratorFactory(
      raceStep, 
      (raceStep) => this.setProjection({
        ...this.getDTO(),
        race: raceStep.raceName
      }))
    
    super.selectRace(race, factory)
    this.setProjection(this.getDTO())
  }
}