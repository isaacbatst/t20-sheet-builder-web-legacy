import { VersatileChoice, VersatileChoiceSkill } from "t20-sheet-builder";

export type HumanRaceStepVersatileInterface = {
  selectFirstChoice(firstChoice: VersatileChoiceSkill): void
  selectSecondChoice(secondChoice: VersatileChoice): void
  getFirstChoice(): VersatileChoiceSkill | undefined
  getSecondChoice(): VersatileChoice | undefined
  getDTO(): HumanRaceStepVersatileDTO
}

export type HumanRaceStepVersatileDTO = {
  firstChoice?: VersatileChoiceSkill;
  secondChoice?: VersatileChoice;
}

export class HumanRaceStepVersatile implements HumanRaceStepVersatileInterface {
  private firstChoice?: VersatileChoiceSkill;
  private secondChoice?: VersatileChoice;

  selectFirstChoice(firstChoice: VersatileChoiceSkill) {
    this.firstChoice = firstChoice
  }

  selectSecondChoice(secondChoice: VersatileChoice) {
    this.secondChoice = secondChoice
  }

  getFirstChoice() {
    return this.firstChoice
  }

  getSecondChoice() {
    return this.secondChoice
  }

  getDTO(): HumanRaceStepVersatileDTO {
    return {
      firstChoice: this.firstChoice,
      secondChoice: this.secondChoice
    }
  }
}