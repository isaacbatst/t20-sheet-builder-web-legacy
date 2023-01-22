import { SkillName, VersatileChoiceSkill } from "t20-sheet-builder";
import { describe } from "vitest";
import { HumanRaceStep } from "./HumanRaceStep";
import { HumanRaceStepAttributesSelector } from "./HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelector";
import { HumanRaceStepVersatile } from "./HumanRaceStepVersatile/HumanRaceStepVersatile";

describe('HumanRaceStep', () => {
  it('should build human', () => {
    const selector = new HumanRaceStepAttributesSelector();
    selector.toggleAttribute('strength');
    selector.toggleAttribute('dexterity');
    selector.toggleAttribute('constitution');
    const versatile = new HumanRaceStepVersatile();
    versatile.selectFirstChoice(new VersatileChoiceSkill(SkillName.acrobatics))
    versatile.selectSecondChoice(new VersatileChoiceSkill(SkillName.aim))
    const humanRaceStep = new HumanRaceStep(selector, versatile);
    const human = humanRaceStep.build()
    expect(human.versatileChoices).toContainEqual(new VersatileChoiceSkill(SkillName.acrobatics))
    expect(human.versatileChoices).toContainEqual(new VersatileChoiceSkill(SkillName.aim))
    expect(human.attributeModifiers).toEqual({
      strength: 1,
      dexterity: 1,
      constitution: 1
    });
  })

  it('should not build without three selected attributes', () => {
    const selector = new HumanRaceStepAttributesSelector();
    selector.toggleAttribute('strength');
    selector.toggleAttribute('constitution');
    const versatile = new HumanRaceStepVersatile();
    versatile.selectFirstChoice(new VersatileChoiceSkill(SkillName.acrobatics))
    versatile.selectSecondChoice(new VersatileChoiceSkill(SkillName.aim))
    const humanRaceStep = new HumanRaceStep(selector, versatile);
    
    expect(() => {
      const human = humanRaceStep.build()
    }).toThrow('INVALID_SELECTED_ATTRIBUTES')
  })

  it('should not build without versatile first choice', () => {
    const selector = new HumanRaceStepAttributesSelector();
    selector.toggleAttribute('strength');
    selector.toggleAttribute('dexterity');
    selector.toggleAttribute('constitution');
    const versatile = new HumanRaceStepVersatile();
    versatile.selectSecondChoice(new VersatileChoiceSkill(SkillName.aim))
    const humanRaceStep = new HumanRaceStep(selector, versatile);
    
    expect(() => {
      const human = humanRaceStep.build()
    }).toThrow('UNDEFINED_FIRST_CHOICE')
  })

  it('should not build without versatile second choice', () => {
    const selector = new HumanRaceStepAttributesSelector();
    selector.toggleAttribute('strength');
    selector.toggleAttribute('dexterity');
    selector.toggleAttribute('constitution');
    const versatile = new HumanRaceStepVersatile();
    versatile.selectFirstChoice(new VersatileChoiceSkill(SkillName.acrobatics))
    const humanRaceStep = new HumanRaceStep(selector, versatile);
    
    expect(() => {
      const human = humanRaceStep.build()
    }).toThrow('UNDEFINED_SECOND_CHOICE')
  })
})