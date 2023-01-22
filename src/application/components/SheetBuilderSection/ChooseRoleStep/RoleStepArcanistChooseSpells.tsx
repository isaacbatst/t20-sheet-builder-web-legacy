import React from 'react'
import { Updater } from 'use-immer'
import { RoleStepArcanistChooseSpellsSelector } from './RoleStepArcanistChooseSpellsSelector'
import SpellSelection from './SpellSelection'

type Props = {
  selector: RoleStepArcanistChooseSpellsSelector
  setSelector: Updater<RoleStepArcanistChooseSpellsSelector>
}

const RoleStepArcanistChooseSpells: React.FC<Props> = ({ selector, setSelector }) => {
  return (
    <div className='mb-2'>
      <div className='mb-1'>Magias iniciais:</div>
      <SpellSelection selector={selector} 
        handleChange={(spell) => setSelector(draft => draft.toggle(spell))} />
    </div>
  )
}

export default RoleStepArcanistChooseSpells