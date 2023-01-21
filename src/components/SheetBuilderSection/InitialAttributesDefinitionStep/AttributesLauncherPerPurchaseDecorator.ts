import { Attribute, Attributes } from "t20-sheet-builder";
import { AttributesLauncherPerPurchaseInterface } from "./AttributesLauncherPerPurchase";


export class AttributesLauncherPerPurchaseDecorator implements AttributesLauncherPerPurchaseInterface {
  constructor(protected attributesLauncherPerPurchase: AttributesLauncherPerPurchaseInterface){}
    
  getAttributes(): Attributes {
    return this.attributesLauncherPerPurchase.getAttributes()
  }

  getPoints() {
    return this.attributesLauncherPerPurchase.getPoints()
  }

  buy(attribute: Attribute): void {    
    this.attributesLauncherPerPurchase.buy(attribute)
  }

  sell(attribute: Attribute): void {
    this.attributesLauncherPerPurchase.sell(attribute)
  }
}
