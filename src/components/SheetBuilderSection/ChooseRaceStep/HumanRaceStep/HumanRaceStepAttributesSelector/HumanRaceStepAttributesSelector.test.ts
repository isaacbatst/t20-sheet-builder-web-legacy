import { Attributes } from "t20-sheet-builder";
import { describe } from "vitest";
import { HumanRaceStepAttributesSelector } from "./HumanRaceStepAttributesSelector";

describe('HumanRaceStepAttributesSelector', () => {
  it('should init all attributes unchecked', () => {
    const selector = new HumanRaceStepAttributesSelector()
    expect(selector.getAttributes().strength).toBe(false)
    expect(selector.getAttributes().dexterity).toBe(false)
    expect(selector.getAttributes().constitution).toBe(false)
    expect(selector.getAttributes().intelligence).toBe(false)
    expect(selector.getAttributes().wisdom).toBe(false)
    expect(selector.getAttributes().charisma).toBe(false)
  })

  it('should check strength', () => {
    const selector = new HumanRaceStepAttributesSelector()
    selector.toggleAttribute('strength');
    expect(selector.getAttributes().strength).toBe(true)
  })

  it('should uncheck strength', () => {
    const selector = new HumanRaceStepAttributesSelector()
    selector.toggleAttribute('strength');
    selector.toggleAttribute('strength');
    expect(selector.getAttributes().strength).toBe(false)
  })

  it("should check 3 attributes", () => {
    const selector = new HumanRaceStepAttributesSelector()
    selector.toggleAttribute('strength');
    selector.toggleAttribute('dexterity');
    selector.toggleAttribute('constitution');
    expect(selector.getAttributes().strength).toBe(true)
    expect(selector.getAttributes().dexterity).toBe(true)
    expect(selector.getAttributes().constitution).toBe(true)
  })

  it("should not check 4 attributes", () => {
    const selector = new HumanRaceStepAttributesSelector()
    
    expect(() => {
      selector.toggleAttribute('strength');
      selector.toggleAttribute('dexterity');
      selector.toggleAttribute('constitution');
      selector.toggleAttribute('intelligence');
    }).toThrow('MAX_ATTRIBUTES_CHECKED')
  })

  it('should get attributes preview', () => {
    const selector = new HumanRaceStepAttributesSelector()
    selector.toggleAttribute('strength');
    selector.toggleAttribute('dexterity');
    selector.toggleAttribute('constitution');
    const initialAttributes: Attributes = { charisma: 0, constitution: 0, dexterity: 0, intelligence: 0, strength: 0, wisdom: 0}
    expect(selector.getPreview('strength', initialAttributes)).toBe(1)
    expect(selector.getPreview('dexterity', initialAttributes)).toBe(1)
    expect(selector.getPreview('constitution', initialAttributes)).toBe(1)
    expect(selector.getPreview('intelligence', initialAttributes)).toBe(0)
    expect(selector.getPreview('wisdom', initialAttributes)).toBe(0)
    expect(selector.getPreview('charisma', initialAttributes)).toBe(0)
  })
})