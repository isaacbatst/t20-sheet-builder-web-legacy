import { SheetBuilderStepsDTO, SheetBuilderStepsInterface } from "./SheetBuilderSteps";
import { SheetBuilderStepsDecorator } from "./SheetBuilderStepsDecorator";

export class SheetBuilderStepsProjectionDecorator extends SheetBuilderStepsDecorator {
  constructor(
    sheetBuilderSteps: SheetBuilderStepsInterface,
    readonly setProjection: (projection: SheetBuilderStepsDTO) => void
  ){
    super(sheetBuilderSteps)
  }

  next(): void {
    this.sheetBuilderSteps.next()
    this.setProjection(this.sheetBuilderSteps.getDTO())
  }
}