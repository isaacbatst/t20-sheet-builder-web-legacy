import { SpellCircle, Spells, SpellStatic } from "t20-sheet-builder";
import { CheckboxSelector } from "../../../../domain/entities/CheckboxSelector";

export class RoleStepArcanistChooseSpellsSelector extends CheckboxSelector<SpellStatic> {
  constructor(){
    super({
      amount: 3,
      items: Spells.getAll()
        .filter(spell => spell.circle === SpellCircle.first)
    })
  }
}