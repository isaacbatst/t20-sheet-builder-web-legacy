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
    super.next()
    this.setProjection(this.getDTO())
  }

  previous(): void {
    super.previous()
    this.setProjection(this.getDTO())
  }
}