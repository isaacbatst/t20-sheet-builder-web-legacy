import { SheetBuilderStepInterface } from "./SheetBuilderStepInterface";
import { SheetBuilderStepsDTO, SheetBuilderSliderInterface } from "./SheetBuilderSlider";

export class SheetBuilderStepsDecorator implements SheetBuilderSliderInterface {
  constructor(
    readonly sheetBuilderSteps: SheetBuilderSliderInterface
  ){}
  previous(): void {
    this.sheetBuilderSteps.previous()
  }

  next(): void {
    this.sheetBuilderSteps.next()
  }
  shouldShowPrevious(): boolean {
    return this.sheetBuilderSteps.shouldShowPrevious()
  }

  getDTO(): SheetBuilderStepsDTO {
    return this.sheetBuilderSteps.getDTO()
  }

  getCurrent(): SheetBuilderStepInterface {
    return this.sheetBuilderSteps.getCurrent()
  }
}