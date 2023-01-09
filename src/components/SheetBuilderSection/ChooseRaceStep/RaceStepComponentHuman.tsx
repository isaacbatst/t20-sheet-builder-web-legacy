import { ChooseRaceStepInterface } from "./ChooseRaceStep"
import { HumanRaceStepProjectionDecorator } from "./HumanRaceStepDecoratorProjection"
import HumanRaceStepView from "./HumanRaceStepView"
import { RaceStepComponent } from "./RaceStepComponent"

export class RaceStepComponentHuman implements RaceStepComponent {
  constructor(readonly next?: RaceStepComponent | undefined){}

  render(chooseRaceStep: ChooseRaceStepInterface): JSX.Element | undefined {
    const raceStep = chooseRaceStep.getRace()

    if(!raceStep) {
      throw new Error('UNDEFINED_RACE_STEP')
    }
    
    if(raceStep instanceof HumanRaceStepProjectionDecorator){
      return <HumanRaceStepView humanRaceStep={raceStep} />
    }

    return this.next?.render(chooseRaceStep)
  }
}