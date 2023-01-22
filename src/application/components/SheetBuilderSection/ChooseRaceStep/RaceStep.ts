import { RaceInterface, RaceName } from "t20-sheet-builder"

export type RaceStepInterface = {
  raceName: RaceName
  build(): RaceInterface
}

export type RaceStepDTO = {
  raceName: RaceName
}