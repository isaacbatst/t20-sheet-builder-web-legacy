import { HumanRaceStepProjectionDecorator } from "./HumanRaceStep/HumanRaceStepDecoratorProjection"
import HumanRaceStepView from "./HumanRaceStep/HumanRaceStepView"
import { RaceStepInterface } from "./RaceStep"
import { RaceStepComponent } from "./RaceStepComponent"

export class RaceStepComponentHuman implements RaceStepComponent {
  constructor(readonly next?: RaceStepComponent | undefined){}

  render(raceStep: RaceStepInterface): JSX.Element | undefined {
    if(raceStep instanceof HumanRaceStepProjectionDecorator){
      return <HumanRaceStepView humanRaceStep={raceStep} />
    }

    return this.next?.render(raceStep)
  }
}