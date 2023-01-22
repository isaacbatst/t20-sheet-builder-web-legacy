import { AttributesLauncherPerPurchaseInterface } from "./InitialAttributesDefinitionStep/AttributesLauncherPerPurchase"
import InitialAttributesDefinitionStep from "./InitialAttributesDefinitionStep/InitialAttributesDefinitionStep"
import { SheetBuilderStepInterface, SheetBuilderStepType } from "./SheetBuilderStepInterface"

export class SheetBuilderStepInitialAttributesDefinition implements SheetBuilderStepInterface {
  type: SheetBuilderStepType = 'initialAttributesDefinition'

  constructor(
    readonly attributesLauncherPerPurchase: AttributesLauncherPerPurchaseInterface,
  ){}

  getComponent() {
    return  (
      <InitialAttributesDefinitionStep 
        attributesLauncherPerPurchase={this.attributesLauncherPerPurchase}
      />
    )
  }

  validate(): void {
    if(this.attributesLauncherPerPurchase.getPoints() > 0) {
      throw new Error('POINTS_LEFT')
    }
  }
}

