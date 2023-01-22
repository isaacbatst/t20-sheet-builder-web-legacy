import { Attribute, Attributes } from "t20-sheet-builder";

export type HumanRaceStepAttributesSelectorInterface = {
  toggleAttribute(attribute: Attribute): void;
  getAttributes(): Record<Attribute, boolean>;
  getSelectedAttributes(): Attribute[]
  getPreview(attribute: Attribute, initialAttributes: Attributes): number
}

export class HumanRaceStepAttributesSelector implements HumanRaceStepAttributesSelectorInterface {
  private attributes: Record<Attribute, boolean> = {
    strength: false,
    dexterity: false,
    constitution: false,
    intelligence: false,
    wisdom: false,
    charisma: false,
  }

  toggleAttribute(attribute: Attribute) {
    const checkedAttributes = Object.values(this.attributes).reduce((acc, curr) => curr ? acc + 1 : acc, 0);
    const nextIsToggled = !this.attributes[attribute]
    if(nextIsToggled && checkedAttributes >= 3) {
      throw new Error('MAX_ATTRIBUTES_CHECKED')
    }
    this.attributes[attribute] = nextIsToggled
  }

  getSelectedAttributes(): Attribute[] {
    return Object.entries(this.attributes)
    .filter(([_key, checked]) => checked)
    .map(([key]) => key as Attribute)
  }


  getAttributes(): Record<keyof Attributes, boolean> {
    return this.attributes
  }

  getPreview(attribute: Attribute, initialAttributes: Attributes) {
    return this.attributes[attribute] ? initialAttributes[attribute] + 1 : initialAttributes[attribute]
  }
}