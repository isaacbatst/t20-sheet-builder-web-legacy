import { ChooseRaceStepInterface } from "./ChooseRaceStep/ChooseRaceStep";
import { AttributesLauncherPerPurchaseInterface } from "./InitialAttributesDefinitionStep/AttributesLauncherPerPurchase";
import { SheetBuilderFormInterface } from "./SheetBuilderForm";
import { SheetBuilderSliderInterface } from "./SheetBuilderSlider";

export class SheetBuilderFormDecorator implements SheetBuilderFormInterface {
  constructor(
    protected sheetBuilderForm: SheetBuilderFormInterface
  ){}
  confirmStep(validateStep: () => void): void {
    this.sheetBuilderForm.confirmStep(validateStep)
  }
  previous(): void {
    this.sheetBuilderForm.previous()
  }
  getAttributesLauncher(): AttributesLauncherPerPurchaseInterface {
    return this.sheetBuilderForm.getAttributesLauncher()
  }
  getChooseRaceStep(): ChooseRaceStepInterface {
    return this.sheetBuilderForm.getChooseRaceStep()
  }
  getSheetBuilderSteps(): SheetBuilderSliderInterface {
    return this.sheetBuilderForm.getSheetBuilderSteps()
  }
  getError(): string | undefined {
    return this.sheetBuilderForm.getError()
  }
}