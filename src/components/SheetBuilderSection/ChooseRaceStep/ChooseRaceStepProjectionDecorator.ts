import { RaceName } from "t20-sheet-builder";
import { ChooseRaceStepDTO, ChooseRaceStepInterface } from "./ChooseRaceStep";
import { ChooseRaceStepDecorator } from "./ChooseRaceStepDecorator";
import { RaceStepInterface } from "./RaceStep";
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

  selectRace(raceStep: RaceStepInterface) {
    super.selectRace(raceStep)
    this.setProjection(this.getDTO())
  }

  makeRaceStep(raceName: RaceName): RaceStepInterface {
    const raceStep = super.makeRaceStep(raceName);
    const decoratorFactory = new RaceStepProjectionDecoratorFactory(
      raceStep, 
      (raceStep) => this.setProjection({
        ...this.getDTO(),
        race: raceStep.raceName
      }))
    
    return decoratorFactory.make(raceName)
  }
}