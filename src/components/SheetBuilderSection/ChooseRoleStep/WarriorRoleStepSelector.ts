import { immerable } from "immer"
import { ChooseableSkills, SkillName } from "t20-sheet-builder"

export class WarriorRoleStepSelector {
  amountLimit: number
  skills: Map<SkillName, boolean>
  [immerable] = true;

  constructor(choosableSkills: ChooseableSkills) {
    const skills: Map<SkillName, boolean> = new Map()

    choosableSkills.skills.forEach(skill => {
      skills.set(skill, false)
    })

    this.skills = skills;
    this.amountLimit = choosableSkills.amount 
  }

  toggle(skill: SkillName) {
    const skillChecked = this.skills.get(skill)
    if(typeof skillChecked === 'undefined') return
    if(!skillChecked && this.getAmountChecked() >= this.amountLimit) return
    this.skills.set(skill, !skillChecked)
  }

  private getAmountChecked() {
    let amount = 0;
    this.skills.forEach(skill => {
      if(skill) amount += 1
    })
    return amount
  }
}
