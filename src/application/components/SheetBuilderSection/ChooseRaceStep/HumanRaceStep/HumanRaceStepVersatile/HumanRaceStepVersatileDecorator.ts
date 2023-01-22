import { VersatileChoice, VersatileChoiceSkill } from "t20-sheet-builder";
import { CommonErrors } from "../../../../../../domain/entities/CommonErrors";
import { HumanRaceStepVersatileErrors, HumanRaceStepVersatileInterface } from "./HumanRaceStepVersatile";

export abstract class HumanRaceStepVersatileDecorator implements HumanRaceStepVersatileInterface {
  constructor(protected readonly versatile: HumanRaceStepVersatileInterface) {}
  getFirstChoice(): VersatileChoiceSkill | undefined {
    return this.versatile.getFirstChoice()
  }
  getSecondChoice(): VersatileChoice | undefined {
    return this.versatile.getSecondChoice()
  }
  getError(): HumanRaceStepVersatileErrors | CommonErrors | undefined {
    return this.versatile.getError()
  }
  selectFirstChoice(firstChoice: VersatileChoiceSkill): void {
    this.versatile.selectFirstChoice(firstChoice)
  }
  selectSecondChoice(secondChoice: VersatileChoice): void {
    this.versatile.selectSecondChoice(secondChoice)
  }
}