import { VersatileChoice, VersatileChoiceSkill } from "t20-sheet-builder";
import { HumanRaceStepVersatileDTO, HumanRaceStepVersatileInterface } from "./HumanRaceStepVersatile";

export abstract class HumanRaceStepVersatileDecorator implements HumanRaceStepVersatileInterface {
  constructor(protected readonly versatile: HumanRaceStepVersatileInterface) {}
  getFirstChoice(): VersatileChoiceSkill | undefined {
    return this.versatile.getFirstChoice()
  }
  getSecondChoice(): VersatileChoice | undefined {
    return this.versatile.getSecondChoice()
  }
  getDTO(): HumanRaceStepVersatileDTO {
    return this.versatile.getDTO()
  }
  selectFirstChoice(firstChoice: VersatileChoiceSkill): void {
    this.versatile.selectFirstChoice(firstChoice)
  }
  selectSecondChoice(secondChoice: VersatileChoice): void {
    this.versatile.selectSecondChoice(secondChoice)
  }

}