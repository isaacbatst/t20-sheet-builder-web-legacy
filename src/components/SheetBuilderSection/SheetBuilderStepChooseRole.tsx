import ChooseRoleStepView from "./ChooseRoleStep/ChooseRoleStepView"
import { SheetBuilderStepInterface, SheetBuilderStepType } from "./SheetBuilderStepInterface"

export class SheetBuilderStepChooseRole implements SheetBuilderStepInterface {
  type: SheetBuilderStepType = 'chooseRole'
  getComponent(): JSX.Element {
    return <ChooseRoleStepView />
  }
}