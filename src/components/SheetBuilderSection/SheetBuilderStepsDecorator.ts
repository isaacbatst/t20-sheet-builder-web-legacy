import { SheetBuilderStepInterface } from "./SheetBuilderStepInterface";
import { SheetBuilderStepsDTO, SheetBuilderStepsInterface } from "./SheetBuilderSteps";

export class SheetBuilderStepsDecorator implements SheetBuilderStepsInterface {
  constructor(
    readonly sheetBuilderSteps: SheetBuilderStepsInterface
  ){}

  next(): void {
    this.sheetBuilderSteps.next()
  }

  getDTO(): SheetBuilderStepsDTO {
    return this.sheetBuilderSteps.getDTO()
  }

  getCurrent(): SheetBuilderStepInterface {
    return this.sheetBuilderSteps.getCurrent()
  }
}