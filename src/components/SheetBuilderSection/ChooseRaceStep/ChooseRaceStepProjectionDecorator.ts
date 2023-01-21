import { RaceName } from "t20-sheet-builder";
import { ChooseRaceStepInterface } from "./ChooseRaceStep";
import { ChooseRaceStepDecorator } from "./ChooseRaceStepDecorator";
import { RaceStepInterface } from "./RaceStep";
import { RaceStepProjectionDecoratorFactory } from "./RaceStepProjectionDecoratorFactory";

export type ChooseRaceStepProjection = {
  race?: RaceName
}

export class ChooseRaceStepProjectionDecorator extends ChooseRaceStepDecorator {
  static getProjection(chooseRaceStep: ChooseRaceStepInterface): ChooseRaceStepProjection {
    return {
      race: chooseRaceStep.getRaceStep()?.raceName
    }
  }
  
  constructor(
    chooseRaceStep: ChooseRaceStepInterface,
    private readonly setProjection: (projection: ChooseRaceStepProjection) => void
  ){
    super(chooseRaceStep)
  }

  confirm(): void {
    super.confirm();
    this.setProjection(this.getProjection())
  }

  selectRace(raceStep: RaceStepInterface) {
    super.selectRace(raceStep)
    this.setProjection(this.getProjection())
  }

  makeRaceStep(raceName: RaceName): RaceStepInterface {
    const raceStep = super.makeRaceStep(raceName);
    const raceStepDecoratorFactory = new RaceStepProjectionDecoratorFactory(
      raceStep, 
      (raceStep) => this.setProjection({
        ...this.getProjection(),
        race: raceStep.raceName
      }))
    
    return raceStepDecoratorFactory.make(raceName)
  }

  private getProjection() {
    return ChooseRaceStepProjectionDecorator.getProjection(this.chooseRaceStep)
  }
}