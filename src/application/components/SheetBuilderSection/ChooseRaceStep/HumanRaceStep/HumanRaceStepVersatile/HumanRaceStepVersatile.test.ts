import { SkillName, VersatileChoiceSkill } from "t20-sheet-builder";
import { describe, expect } from "vitest";
import { HumanRaceStepVersatile } from "./HumanRaceStepVersatile";

describe('HumanRaceStepVersatile', () => {
  it('should init without choices', () => {
    const versatile = new HumanRaceStepVersatile();
    expect(versatile.getFirstChoice()).toBeUndefined();
    expect(versatile.getSecondChoice()).toBeUndefined();
  })

  it('should select first choice', () => {
    const versatile = new HumanRaceStepVersatile();
    const choice = new VersatileChoiceSkill(SkillName.aim);
    versatile.selectFirstChoice(choice);
    expect(versatile.getFirstChoice()).toEqual(choice)
  })

  it('should select second choice', () => {
    const versatile = new HumanRaceStepVersatile();
    const choice = new VersatileChoiceSkill(SkillName.animalRide);
    versatile.selectSecondChoice(choice);
    expect(versatile.getSecondChoice()).toEqual(choice)
  })

  it('should not select equal choices', () => {
    const versatile = new HumanRaceStepVersatile();
    const choice = new VersatileChoiceSkill(SkillName.animalRide);
    versatile.selectFirstChoice(choice);
    versatile.selectSecondChoice(choice);
    
    expect(versatile.getError()).toBe('EQUAL_CHOICES')
  })
})