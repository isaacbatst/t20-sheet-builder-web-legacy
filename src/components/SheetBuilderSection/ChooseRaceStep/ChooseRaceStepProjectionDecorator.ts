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

  confirm(raceStep: RaceStepInterface | undefined): void {
    super.confirm(raceStep);
    this.setProjection(this.getDTO())
  }

  selectRace(raceStep: RaceStepInterface) {
    super.selectRace(raceStep)
    this.setProjection(this.getDTO())
  }

  makeRaceStep(raceName: RaceName): RaceStepInterface {
    const raceStep = super.makeRaceStep(raceName);
    const raceStepDecoratorFactory = new RaceStepProjectionDecoratorFactory(
      raceStep, 
      (raceStep) => this.setProjection({
        ...this.getDTO(),
        race: raceStep.raceName
      }))
    
    return raceStepDecoratorFactory.make(raceName)
  }
}