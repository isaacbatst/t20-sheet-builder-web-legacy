import React from 'react'
import { SpellStatic, Translator } from 't20-sheet-builder'
import { CheckboxSelector } from '../../../domain/entities/CheckboxSelector'
import Checkbox from '../../Checkbox/Checkbox'

type Props = {
  selector: CheckboxSelector<SpellStatic>
  handleChange: (spell: SpellStatic) => void
}

const SpellSelection: React.FC<Props> = ({ selector, handleChange }) => {
  const title = `Escolha ${selector.amountLimit} magia${selector.amountLimit > 1 ? 's' : ''}:`;
  return (
    <div>
      <div className='mb-1'>{title}</div>
      <div className='flex flex-wrap justify-center'>
        {Array.from(selector.items, ([spell, checked]) => ({ spell, checked })).map(({ checked, spell }) => 
          <Checkbox key={spell.spellName} checked={checked} handleChange={() => handleChange(spell)}>{Translator.getSpellTranslation(spell.spellName)}</Checkbox>)
        }
      </div>
    </div>
  )
}

export default SpellSelection