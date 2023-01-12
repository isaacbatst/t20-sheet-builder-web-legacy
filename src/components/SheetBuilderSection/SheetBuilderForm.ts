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
  confirmRace(selectedRace: RaceStepInterface | undefined): void
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


  confirmRace(selectedRace: RaceStepInterface | undefined): void {
    try {
      this.error = undefined
      if(!selectedRace) throw new Error('UNDEFINED_RACE')

      this.race = selectedRace.build()
      this.sheetBuilderSteps.next()
    } catch(err) {
      if(!(err instanceof Error)){
        this.error = 'UNKNOWN_ERROR';
        return
      }

      this.error = err.message
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
}