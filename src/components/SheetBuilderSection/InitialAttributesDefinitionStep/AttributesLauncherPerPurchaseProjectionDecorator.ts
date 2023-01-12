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
  
  setAttribute(attribute: keyof Attributes, value: number): void {
    super.setAttribute(attribute, value)
    this.setProjection(this.getDTO())
  }

  increment(attribute: Attribute): void {    
    super.increment(attribute)
    this.setProjection(this.getDTO())
  }

  decrement(attribute: Attribute): void {
    super.decrement(attribute)
    this.setProjection(this.getDTO())
  }
}