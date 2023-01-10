import { SheetBuilderStepInterface } from "./SheetBuilderStepInterface";
import { SheetBuilderStepsDTO, SheetBuilderStepsInterface } from "./SheetBuilderSteps";

export class SheetBuilderStepsDecorator implements SheetBuilderStepsInterface {
  constructor(
    readonly sheetBuilderSteps: SheetBuilderStepsInterface
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