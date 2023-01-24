import { Attribute, Attributes } from "t20-sheet-builder";

export type AttributesLauncher = {
  getPoints(): number
  getAttributes(): Attributes
}

export type AttributesLauncherPerPurchaseInterface = AttributesLauncher & {
  sell(attribute: Attribute): void
  buy(attribute: Attribute): void
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

  static get initialAttributes() {
    return {strength: 0 , dexterity: 0, constitution: 0,  intelligence: 0 , wisdom: 0, charisma: 0  }
  } 

  private points = 10;

  constructor(private attributes: Attributes = AttributesLauncherPerPurchase.initialAttributes){}

  buy(attribute: Attribute): void {   
    const currentAttribute = this.attributes[attribute]
    if(this.points === 0) {
      throw new Error('ZERO_POINTS')
    }
    if(currentAttribute >= 4) {
      throw new Error('ATTRIBUTE_MAX') 
    }
    const attributeResult = currentAttribute + 1;
    const totalResult = this.points - Math.abs(AttributesLauncherPerPurchase.price[currentAttribute] - AttributesLauncherPerPurchase.price[attributeResult])
    
    if(totalResult < 0) {
      throw new Error('NOT_ENOUGH_POINTS')
    }
    this.points = totalResult
    this.attributes[attribute] = attributeResult;
  }

  sell(attribute: Attribute): void {
    const currentAttribute = this.attributes[attribute]
    if(currentAttribute <= -1) {
      throw new Error('MINIMUM_ATTRIBUTE')
    };

    const result = currentAttribute - 1;
    this.points += Math.abs(AttributesLauncherPerPurchase.price[currentAttribute] - AttributesLauncherPerPurchase.price[result])
    this.attributes[attribute] = result;
  }

  
  getAttributes(): Attributes {
    return this.attributes
  }

  getPoints() {
    return this.points
  }
}
