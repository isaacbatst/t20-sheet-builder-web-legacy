import { VersatileChoice, VersatileChoiceSkill } from "t20-sheet-builder";
import { CommonErrors } from "../../../../../../domain/entities/CommonErrors";
import { ErrorHandler } from "../../../../../../domain/entities/ErrorHandler";

export type HumanRaceStepVersatileInterface = {
  selectFirstChoice(firstChoice: VersatileChoiceSkill): void
  selectSecondChoice(secondChoice: VersatileChoice): void
  getFirstChoice(): VersatileChoiceSkill | undefined
  getSecondChoice(): VersatileChoice | undefined
  getError(): HumanRaceStepVersatileErrors | CommonErrors | undefined
}

export enum HumanRaceStepVersatileErrors {
  EQUAL_CHOICES = 'EQUAL_CHOICES'
}

export class HumanRaceStepVersatile implements HumanRaceStepVersatileInterface {
  private firstChoice?: VersatileChoiceSkill;
  private secondChoice?: VersatileChoice;
  private error?: HumanRaceStepVersatileErrors | CommonErrors

  selectFirstChoice(firstChoice: VersatileChoiceSkill) {
    ErrorHandler.tryTo(() => {
      this.validateChoices({ first: firstChoice, second: this.secondChoice })
      this.firstChoice = firstChoice
    }, (error) => this.setError(error))
  }

  selectSecondChoice(secondChoice: VersatileChoice) {
    ErrorHandler.tryTo(() => {
      this.validateChoices({ first: this.firstChoice, second: secondChoice })
      this.secondChoice = secondChoice
    }, (error) => this.setError(error))
  }

  getFirstChoice() {
    return this.firstChoice
  }

  getSecondChoice() {
    return this.secondChoice
  }

  getError(){
    return this.error
  }

  private setError(error?: string) {
    if(error && this.isHumanRaceStepVersatileError(error)){
      this.error = error
      return
    }

    this.error = CommonErrors.UNKNOWN_ERROR
  }

  private isHumanRaceStepVersatileError(error: string): error is HumanRaceStepVersatileErrors {
    return error in HumanRaceStepVersatileErrors
  }

  private validateChoices({ first, second }: { first?: VersatileChoiceSkill, second?: VersatileChoice }) {
    if(first && second && first.type === second.type && first.name === second.name) {
      throw new Error(HumanRaceStepVersatileErrors.EQUAL_CHOICES)
    }
  }
}