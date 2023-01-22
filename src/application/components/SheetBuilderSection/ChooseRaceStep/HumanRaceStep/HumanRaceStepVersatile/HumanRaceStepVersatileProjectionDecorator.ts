import { VersatileChoice, VersatileChoiceSkill } from "t20-sheet-builder";
import { HumanRaceStepVersatileInterface } from "./HumanRaceStepVersatile";
import { HumanRaceStepVersatileDecorator } from "./HumanRaceStepVersatileDecorator";

export type HumanRaceStepVersatileProjection = {
  firstChoice?: VersatileChoiceSkill;
  secondChoice?: VersatileChoice;
}

export class HumanRaceStepVersatileProjectionDecorator extends HumanRaceStepVersatileDecorator {
  static getProjection(versatile: HumanRaceStepVersatileInterface): HumanRaceStepVersatileProjection {
    return {
      firstChoice: versatile.getFirstChoice(),
      secondChoice: versatile.getSecondChoice()
    }
  }
  
  constructor(
    versatile: HumanRaceStepVersatileInterface, 
    private readonly setProjection: (versatile: HumanRaceStepVersatileProjection) => void
  ) {
    super(versatile)
  }
  selectFirstChoice(firstChoice: VersatileChoiceSkill): void {
    super.selectFirstChoice(firstChoice)
    this.setProjection(this.getProjection())
  }
  selectSecondChoice(secondChoice: VersatileChoice): void {
    super.selectSecondChoice(secondChoice)
    this.setProjection(this.getProjection())
  }
  private getProjection() {
    return HumanRaceStepVersatileProjectionDecorator.getProjection(this.versatile);
  }
}