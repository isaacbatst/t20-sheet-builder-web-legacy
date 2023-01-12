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

  confirmRace(selectedRace: RaceStepInterface | undefined): void {
    super.confirmRace(selectedRace);
    this.setProjection(this.getDTO())
  }
}