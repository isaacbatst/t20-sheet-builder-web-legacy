import { HumanRaceStep } from "./HumanRaceStep";
import { HumanRaceStepDecorator } from "./HumanRaceStepDecorator";

export class HumanRaceStepProjectionDecorator extends HumanRaceStepDecorator {
  constructor(humanRaceStep: HumanRaceStep, private setProjection: (projection: HumanRaceStepDTO) => void){
    super(humanRaceStep)
  }
}