import InitialAttributesDefinitionStep from "./InitialAttributesDefinitionStep/InitialAttributesDefinitionStep"
import { SheetBuilderStepInterface, SheetBuilderStepType } from "./SheetBuilderStepInterface"

export class SheetBuilderStepInitialAttributesDefinition implements SheetBuilderStepInterface {
  type: SheetBuilderStepType = 'initialAttributesDefinition'
  getComponent() {
    return  <InitialAttributesDefinitionStep />
  }
}

