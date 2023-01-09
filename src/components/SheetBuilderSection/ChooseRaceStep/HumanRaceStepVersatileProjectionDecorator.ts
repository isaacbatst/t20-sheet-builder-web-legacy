import { VersatileChoice, VersatileChoiceSkill } from "t20-sheet-builder";
import { HumanRaceStepVersatileDTO, HumanRaceStepVersatileInterface } from "./HumanRaceStepVersatile";
import { HumanRaceStepVersatileDecorator } from "./HumanRaceStepVersatileDecorator";

export class HumanRaceStepVersatileProjectionDecorator extends HumanRaceStepVersatileDecorator {
  constructor(
    versatile: HumanRaceStepVersatileInterface, 
    private readonly setProjection: (versatile: HumanRaceStepVersatileDTO) => void
  ) {
    super(versatile)
  }
  selectFirstChoice(firstChoice: VersatileChoiceSkill): void {
    super.selectFirstChoice(firstChoice)
    this.setProjection(this.versatile.getDTO())
  }
  selectSecondChoice(secondChoice: VersatileChoice): void {
    super.selectSecondChoice(secondChoice)
    this.setProjection(this.versatile.getDTO())
  }
}