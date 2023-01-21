import { ChooseRaceStepInterface } from "./ChooseRaceStep/ChooseRaceStep";
import { AttributesLauncherPerPurchaseInterface } from "./InitialAttributesDefinitionStep/AttributesLauncherPerPurchase";
import { SheetBuilderFormInterface } from "./SheetBuilderForm";
import { SheetBuilderStepsInterface } from "./SheetBuilderSteps";

export class SheetBuilderFormDecorator implements SheetBuilderFormInterface {
  constructor(
    protected sheetBuilderForm: SheetBuilderFormInterface
  ){}
  confirmInitialAttributes(): void {
    this.sheetBuilderForm.confirmInitialAttributes()
  }
  previous(): void {
    this.sheetBuilderForm.previous()
  }
  confirmRace(): void {
    this.sheetBuilderForm.confirmRace()
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
  getError(): string | undefined {
    return this.sheetBuilderForm.getError()
  }
}