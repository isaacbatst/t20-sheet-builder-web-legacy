import { RaceName, RoleName } from "t20-sheet-builder";
import { SheetBuilderFormInterface } from "./SheetBuilderForm";
import { SheetBuilderFormDecorator } from "./SheetBuilderFormDecorator";

export type SheetBuilderFormProjection = {
  error?: string
  race?: RaceName,
  role?: RoleName
}


export class SheetBuilderFormProjectionDecorator extends SheetBuilderFormDecorator {
  static getProjection(sheetBuilderForm: SheetBuilderFormInterface): SheetBuilderFormProjection {
    return {
      error: sheetBuilderForm.getError(),
    }
  }

  constructor(
    sheetBuilderForm: SheetBuilderFormInterface,
    readonly setProjection: (projection: SheetBuilderFormProjection) => void
  ){
    super(sheetBuilderForm);
  }

  confirmInitialAttributes(): void {
    super.confirmInitialAttributes();
    this.setProjection(this.getProjection())
  }

  previous(): void {
    super.previous()
    this.setProjection(this.getProjection())
  }

  confirmRace(): void {
    super.confirmRace();
    this.setProjection(this.getProjection())
  }

  private getProjection(): SheetBuilderFormProjection {
    return SheetBuilderFormProjectionDecorator.getProjection(this.sheetBuilderForm)
  }
}