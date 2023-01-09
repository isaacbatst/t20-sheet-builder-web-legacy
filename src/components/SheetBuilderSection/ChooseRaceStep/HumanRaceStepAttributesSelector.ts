import { Attribute, Attributes } from "t20-sheet-builder";

export type HumanRaceStepAttributesSelectorInterface = {
  toggleAttribute(attribute: Attribute): void;
  getDTO(): HumanRaceStepAttributesSelectorDTO
  getAttributes(): Record<Attribute, boolean>
}

export type HumanRaceStepAttributesSelectorDTO = {
  attributes: Record<Attribute, boolean>
}

export class HumanRaceStepAttributesSelector implements HumanRaceStepAttributesSelectorInterface {
  attributes: Record<Attribute, boolean> = {
    strength: false,
    dexterity: false,
    constitution: false,
    intelligence: false,
    wisdom: false,
    charisma: false,
  }

  toggleAttribute(attribute: Attribute) {
    const checkedAttributes = Object.values(this.attributes).reduce((acc, curr) => curr ? acc + 1 : acc, 0);
    const toggled = !this.attributes[attribute]
    if(toggled && checkedAttributes >= 3) {
      return
    }
    this.attributes[attribute] = toggled
  }

  getAttributes(): Record<keyof Attributes, boolean> {
    return this.attributes
  }

  getPreview(attribute: Attribute, initialAttributes: Attributes) {
    return this.attributes[attribute] ? initialAttributes[attribute] + 1 : initialAttributes[attribute]
  }

  getSelectedAttributes(): Attribute[] {
    return Object.entries(this.attributes)
    .filter(([key, checked]) => checked)
    .map(([key]) => key as Attribute)
  }

  getDTO(): HumanRaceStepAttributesSelectorDTO {
    return {
      attributes: this.attributes
    }
  }
}