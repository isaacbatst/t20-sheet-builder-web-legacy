import { SelectSkillGroup, SkillName } from "t20-sheet-builder"
import { SkillCheckboxSelector } from "./RoleSkillSelector"

export class RoleSkillSelectors {
  readonly selectors: SkillCheckboxSelector[] = []

  constructor(
    skillGroups: SelectSkillGroup[]
  ) {
    skillGroups.forEach(skillGroup => {
      this.selectors.push(new SkillCheckboxSelector(skillGroup))
    })
  }

  getChosenSkills() {
    return this.selectors.flatMap(selector => {
      const chosenSkills: SkillName[] = []

      chosenSkills.push(...selector.getChosenItems())

      return chosenSkills
    })
  }
}