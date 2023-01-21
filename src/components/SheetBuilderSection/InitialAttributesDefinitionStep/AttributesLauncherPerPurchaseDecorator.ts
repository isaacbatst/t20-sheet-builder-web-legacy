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

  increment(attribute: Attribute): void {    
    this.attributesLauncherPerPurchase.increment(attribute)
  }

  decrement(attribute: Attribute): void {
    this.attributesLauncherPerPurchase.decrement(attribute)
  }
}
