import { Attribute, Attributes } from "t20-sheet-builder";

export type AttributesLauncherPerPurchaseDTO = {
  points: number,
  attributes: Attributes  
}

export type AttributesLauncherPerPurchaseInterface = {
  getPoints(): number
  getAttributes(): Attributes
  getDTO(): AttributesLauncherPerPurchaseDTO
  decrement(attribute: Attribute): void
  increment(attribute: Attribute): void
  setAttribute(attribute: Attribute, value: number): void
}

export class AttributesLauncherPerPurchase implements AttributesLauncherPerPurchaseInterface {
  static price: Record<number, number> = {
    [-1]: -1,
    [0]: 0,
    [1]: 1,
    [2]: 2,
    [3]: 4,
    [4]: 7
  }

  static defaultAttributes = {strength: 0 , dexterity: 0, constitution: 0,  intelligence: 0 , wisdom: 0, charisma: 0  }

  private points = 10;

  constructor(private attributes: Attributes = AttributesLauncherPerPurchase.defaultAttributes){}

  setAttribute(attribute: keyof Attributes, value: number): void {
    this.attributes[attribute] = value
  }

  getAttributes(): Attributes {
    return this.attributes
  }

  getPoints() {
    return this.points
  }

  getDTO(): AttributesLauncherPerPurchaseDTO {
    return {
      attributes: this.getAttributes(),
      points: this.getPoints()
    }
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
