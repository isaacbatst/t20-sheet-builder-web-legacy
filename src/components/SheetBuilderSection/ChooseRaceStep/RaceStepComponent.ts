import { RaceStepInterface } from "./RaceStep"

export type RaceStepComponent = {
  next?: RaceStepComponent
  render(raceStep: RaceStepInterface): JSX.Element | undefined
}