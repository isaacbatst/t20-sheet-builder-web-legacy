import { immerable } from "immer"
import { SelectSkillGroup, SkillName } from "t20-sheet-builder"
import { CheckboxSelector } from "../../../../domain/entities/CheckboxSelector";

export class SkillCheckboxSelector extends CheckboxSelector<SkillName> {
  [immerable] = true;

  constructor(choosableSkills: SelectSkillGroup) {
    super({
      amount: choosableSkills.amount,
      items: choosableSkills.skills
    })
  }
}
