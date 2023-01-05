import { Attribute, Attributes } from "t20-sheet-builder";

export class AttributesLauncherPerPurchase {
  static price: Record<number, number> = {
    [-1]: -1,
    [0]: 0,
    [1]: 1,
    [2]: 2,
    [3]: 4,
    [4]: 7
  }

  private points = 10;

  constructor(readonly attributes: Attributes){}

  getPoints() {
    return this.points
  }

  setAttribute(attribute: Attribute, value: number) {
    this.attributes[attribute] = value
  }

  increment(attribute: Attribute): void {
    const currentAttribute = this.attributes[attribute]
    if(this.points === 0) {
      this.attributes[attribute] = currentAttribute;
      return
    }
    if(currentAttribute >= 4) {
      this.attributes[attribute] = 4;
      return 
    }
    const attributeResult = currentAttribute + 1;
    const totalResult = this.points - Math.abs(AttributesLauncherPerPurchase.price[currentAttribute] - AttributesLauncherPerPurchase.price[attributeResult])
    
    if(totalResult < 0) {
      this.attributes[attribute] = currentAttribute
      return
    }
    this.points = totalResult
    this.attributes[attribute] = attributeResult;
  }

  decrement(attribute: Attribute): void {
    const currentAttribute = this.attributes[attribute]
    if(currentAttribute <= -1) {
      this.attributes[attribute] = -1
      return
    };

    const result = currentAttribute - 1;
    this.points += Math.abs(AttributesLauncherPerPurchase.price[currentAttribute] - AttributesLauncherPerPurchase.price[result])
    this.attributes[attribute] = result;
  }
}
