import { ChooseRaceStepInterface } from "./ChooseRaceStep"

export type RaceStepComponent = {
  next?: RaceStepComponent
  render(raceStep: ChooseRaceStepInterface): JSX.Element | undefined
}