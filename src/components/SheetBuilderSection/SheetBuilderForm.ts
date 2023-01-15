import { RaceInterface, RaceName, RoleInterface, RoleName } from "t20-sheet-builder";
import { AttributesLauncherPerPurchaseInterface } from "./InitialAttributesDefinitionStep/AttributesLauncherPerPurchase";
import { ChooseRaceStepInterface } from "./ChooseRaceStep/ChooseRaceStep";
import { RaceStepInterface } from "./ChooseRaceStep/RaceStep";
import { SheetBuilderStepsInterface } from "./SheetBuilderSteps";

export type SheetBuilderFormDTO = {
  error?: string
  race?: RaceName,
  role?: RoleName
}

export type SheetBuilderFormInterface = {
  getDTO(): SheetBuilderFormDTO
  getError(): string | undefined
  getAttributesLauncher(): AttributesLauncherPerPurchaseInterface
  getChooseRaceStep(): ChooseRaceStepInterface
  getSheetBuilderSteps(): SheetBuilderStepsInterface
  confirmRace(): void
  confirmInitialAttributes(): void
  previous(): void
}

export class SheetBuilderForm implements SheetBuilderFormInterface {
  private race?: RaceInterface;
  private role?: RoleInterface;
  private error?: string;
  
  constructor(
    private sheetBuilderSteps: SheetBuilderStepsInterface,
    private attributesLauncher: AttributesLauncherPerPurchaseInterface,
    private chooseRaceStep: ChooseRaceStepInterface
  ){}

  previous() {
    this.sheetBuilderSteps.previous()
    this.error = undefined
  }

  confirmInitialAttributes(): void {
    try {
      this.error = undefined
      this.attributesLauncher.confirm()
      this.sheetBuilderSteps.next()
    } catch(err){
      this.handleError(err)
    }
  }

  confirmRace(): void {
    try {
      this.error = undefined
      this.chooseRaceStep.confirm()
      this.sheetBuilderSteps.next()
    } catch(err) {
      this.handleError(err)
    }
  }

  getAttributesLauncher(): AttributesLauncherPerPurchaseInterface {
    return this.attributesLauncher
  }
  getChooseRaceStep(): ChooseRaceStepInterface {
    return this.chooseRaceStep
  }
  getSheetBuilderSteps(): SheetBuilderStepsInterface {
    return this.sheetBuilderSteps
  }

  getDTO(): SheetBuilderFormDTO {
    return {
      error: this.error,
      race: this.race?.name,
      role: this.role?.name
    }
  }

  getError(): string | undefined {
    return this.error
  }

  private handleError(error: unknown) {
    if(!(error instanceof Error)){
      this.error = 'UNKNOWN_ERROR';
      return
    }

    this.error = error.message
  }
}