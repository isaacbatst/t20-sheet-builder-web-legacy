import { Attribute, Attributes } from "t20-sheet-builder";

export class HumanRaceStepAttributesSelector {
  attributes: Record<Attribute, boolean> = {
    charisma: false,
    constitution: false,
    dexterity: false,
    intelligence: false,
    strength: false,
    wisdom: false
  }

  toggleAttribute(attribute: Attribute) {
    const checkedAttributes = Object.values(this.attributes).reduce((acc, curr) => curr ? acc + 1 : acc, 0);
    const toggled = !this.attributes[attribute]
    if(toggled && checkedAttributes >= 3) {
      return
    }
    this.attributes[attribute] = toggled
  }

  getPreview(attribute: Attribute, initialAttributes: Attributes) {
    return this.attributes[attribute] ? initialAttributes[attribute] + 1 : initialAttributes[attribute]
  }

  getSelectedAttributes(): Attribute[] {
    return Object.entries(this.attributes)
    .filter(([key, checked]) => checked)
    .map(([key]) => key as Attribute)
  }
}