import { RaceStepInterface } from "./ChooseRaceStep/RaceStep";
import { SheetBuilderFormDTO, SheetBuilderFormInterface } from "./SheetBuilderForm";
import { SheetBuilderFormDecorator } from "./SheetBuilderFormDecorator";

export class SheetBuilderFormProjectionDecorator extends SheetBuilderFormDecorator {
  constructor(
    sheetBuilderForm: SheetBuilderFormInterface,
    readonly setProjection: (projection: SheetBuilderFormDTO) => void
  ){
    super(sheetBuilderForm);
  }

  confirmInitialAttributes(): void {
    super.confirmInitialAttributes();
    this.setProjection(this.getDTO())
  }

  previous(): void {
    super.previous()
    this.setProjection(this.getDTO())
  }

  confirmRace(selectedRace: RaceStepInterface | undefined): void {
    super.confirmRace(selectedRace);
    this.setProjection(this.getDTO())
  }
}