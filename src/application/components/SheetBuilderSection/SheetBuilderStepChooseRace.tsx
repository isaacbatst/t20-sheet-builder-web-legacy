import ChooseRaceStepView from "./ChooseRaceStep/ChooseRaceStepView"
import { SheetBuilderStepInterface, SheetBuilderStepType } from "./SheetBuilderStepInterface"

export class SheetBuilderStepChooseRace implements SheetBuilderStepInterface {
  type: SheetBuilderStepType = 'chooseRace'
  getComponent(): JSX.Element {
    return <ChooseRaceStepView />
  }
}