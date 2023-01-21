import { Attribute, Attributes } from "t20-sheet-builder";
import { AttributesLauncherPerPurchaseDTO, AttributesLauncherPerPurchaseInterface } from "./AttributesLauncherPerPurchase";
import { AttributesLauncherPerPurchaseDecorator } from "./AttributesLauncherPerPurchaseDecorator";


export class AttributesLauncherPerPurchaseProjectionDecorator extends AttributesLauncherPerPurchaseDecorator {
  constructor(
    attributesLauncherPerPurchase: AttributesLauncherPerPurchaseInterface,
    private setProjection: (projection: AttributesLauncherPerPurchaseDTO) => void
  ){
    super(attributesLauncherPerPurchase)
  }
  
  buy(attribute: Attribute): void {    
    super.buy(attribute)
    this.setProjection(this.getDTO())
  }

  sell(attribute: Attribute): void {
    super.sell(attribute)
    this.setProjection(this.getDTO())
  }
}
