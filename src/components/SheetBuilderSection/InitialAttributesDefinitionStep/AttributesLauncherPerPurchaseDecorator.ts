import { Attribute, Attributes } from "t20-sheet-builder";
import { AttributesLauncherPerPurchaseDTO, AttributesLauncherPerPurchaseInterface } from "./AttributesLauncherPerPurchase";


export class AttributesLauncherPerPurchaseDecorator implements AttributesLauncherPerPurchaseInterface {
  constructor(protected attributesLauncherPerPurchase: AttributesLauncherPerPurchaseInterface){}
  
  confirm(): void {
    this.attributesLauncherPerPurchase.confirm()
  }
  
  getDTO(): AttributesLauncherPerPurchaseDTO {
    return this.attributesLauncherPerPurchase.getDTO()
  }
  
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
