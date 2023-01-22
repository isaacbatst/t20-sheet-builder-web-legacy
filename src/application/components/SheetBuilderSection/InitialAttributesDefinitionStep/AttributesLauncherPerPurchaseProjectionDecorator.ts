import { Attribute, Attributes } from "t20-sheet-builder";
import { AttributesLauncherPerPurchaseInterface } from "./AttributesLauncherPerPurchase";
import { AttributesLauncherPerPurchaseDecorator } from "./AttributesLauncherPerPurchaseDecorator";

export type AttributesLauncherPerPurchaseProjection = {
  points: number,
  attributes: Attributes  
}

export class AttributesLauncherPerPurchaseProjectionDecorator extends AttributesLauncherPerPurchaseDecorator {
  static getProjection(launcher: AttributesLauncherPerPurchaseInterface): AttributesLauncherPerPurchaseProjection {
    return {
      attributes: launcher.getAttributes(),
      points: launcher.getPoints()
    }
  }
  
  constructor(
    attributesLauncherPerPurchase: AttributesLauncherPerPurchaseInterface,
    private setProjection: (projection: AttributesLauncherPerPurchaseProjection) => void
  ){
    super(attributesLauncherPerPurchase)
  }
  
  buy(attribute: Attribute): void {    
    super.buy(attribute)
    this.setProjection(this.getProjection())
  }

  sell(attribute: Attribute): void {
    super.sell(attribute)
    this.setProjection(this.getProjection())
  }

  private getProjection() {
    return AttributesLauncherPerPurchaseProjectionDecorator.getProjection(this.attributesLauncherPerPurchase)
  }
}
