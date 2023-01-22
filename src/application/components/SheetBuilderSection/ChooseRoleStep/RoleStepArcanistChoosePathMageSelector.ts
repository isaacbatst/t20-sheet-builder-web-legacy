import { SpellCircle, SpellName, Spells, SpellStatic } from "t20-sheet-builder";
import { CheckboxSelector } from "../../../../domain/entities/CheckboxSelector";

export class RoleStepArcanistChoosePathMageSelector extends CheckboxSelector<SpellStatic> {
  constructor(){
    super({
      amount: 1,
      items: Spells.getAll()
        .filter(spell => spell.circle === SpellCircle.first)
    })
  }

  getSelected(): SpellStatic | undefined {
    return this.getChosenItems()[0]
  }
}