import { ChooseRaceStepInterface } from "./ChooseRaceStep/ChooseRaceStep";
import { RaceStepInterface } from "./ChooseRaceStep/RaceStep";
import { AttributesLauncherPerPurchaseInterface } from "./InitialAttributesDefinitionStep/AttributesLauncherPerPurchase";
import { SheetBuilderFormDTO, SheetBuilderFormInterface } from "./SheetBuilderForm";
import { SheetBuilderStepsInterface } from "./SheetBuilderSteps";

export class SheetBuilderFormDecorator implements SheetBuilderFormInterface {
  constructor(
    protected sheetBuilderForm: SheetBuilderFormInterface
  ){}
  confirmRace(selectedRace: RaceStepInterface | undefined): void {
    this.sheetBuilderForm.confirmRace(selectedRace)
  }
  getAttributesLauncher(): AttributesLauncherPerPurchaseInterface {
    return this.sheetBuilderForm.getAttributesLauncher()
  }
  getChooseRaceStep(): ChooseRaceStepInterface {
    return this.sheetBuilderForm.getChooseRaceStep()
  }
  getSheetBuilderSteps(): SheetBuilderStepsInterface {
    return this.sheetBuilderForm.getSheetBuilderSteps()
  }

  getDTO(): SheetBuilderFormDTO {
    return this.sheetBuilderForm.getDTO()
  }
  getError(): string | undefined {
    return this.sheetBuilderForm.getError()
  }
}