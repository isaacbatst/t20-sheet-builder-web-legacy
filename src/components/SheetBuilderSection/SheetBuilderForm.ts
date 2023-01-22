import { ChooseRaceStepInterface } from "./ChooseRaceStep/ChooseRaceStep";
import { AttributesLauncherPerPurchaseInterface } from "./InitialAttributesDefinitionStep/AttributesLauncherPerPurchase";
import { SheetBuilderSliderInterface } from "./SheetBuilderSlider";

export type SheetBuilderFormInterface = {
  getError(): string | undefined
  getAttributesLauncher(): AttributesLauncherPerPurchaseInterface
  getChooseRaceStep(): ChooseRaceStepInterface
  getSheetBuilderSteps(): SheetBuilderSliderInterface
  confirmStep(validateStep: () => void): void
  previous(): void
}

export class SheetBuilderForm implements SheetBuilderFormInterface {
  private error?: string;
  
  constructor(
    private slider: SheetBuilderSliderInterface,
    private attributesLauncher: AttributesLauncherPerPurchaseInterface,
    private chooseRaceStep: ChooseRaceStepInterface
  ){}

  previous() {
    this.slider.previous()
    this.error = undefined
  }

  confirmStep(validateStep: () => void): void {
    try {
      this.error = undefined
      validateStep();
      this.slider.next()
    } catch(err){
      this.handleError(err)
    }
  }

  getAttributesLauncher(): AttributesLauncherPerPurchaseInterface {
    return this.attributesLauncher
  }
  getChooseRaceStep(): ChooseRaceStepInterface {
    return this.chooseRaceStep
  }
  getSheetBuilderSteps(): SheetBuilderSliderInterface {
    return this.slider
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