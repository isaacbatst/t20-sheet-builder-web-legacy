import { Dwarf, RaceInterface, RaceName } from "t20-sheet-builder";
import { RaceStepInterface } from "../RaceStep";

export class DwarfRaceStep implements RaceStepInterface {
  readonly raceName: RaceName = RaceName.dwarf
  build(): RaceInterface {
    return new Dwarf()
  }
}