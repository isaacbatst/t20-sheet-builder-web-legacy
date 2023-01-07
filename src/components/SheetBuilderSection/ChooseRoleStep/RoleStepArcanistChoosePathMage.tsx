import React, { useEffect } from 'react'
import { ArcanistPath, ArcanistPathMage } from 't20-sheet-builder'
import { useImmer } from 'use-immer'
import { RoleStepArcanistChoosePathMageSelector } from './RoleStepArcanistChoosePathMageSelector'
import SpellSelection from './SpellSelection'

type Props = {
  setPath(path: ArcanistPath): void
}

const RoleStepArcanistChoosePathMage: React.FC<Props> = ({ setPath }) => {
  const [spellSelector, setSpellSelector] = useImmer(new RoleStepArcanistChoosePathMageSelector())

  useEffect(() => {
    const Spell = spellSelector.getSelected();

    if(!Spell) return

    setPath(new ArcanistPathMage(new Spell()))
  }, [setPath, spellSelector])

  return (
    <div className='flex flex-col mb-2'>
      <div className='mb-1'>Você começa com uma magia adicional.</div>
      <SpellSelection selector={spellSelector} handleChange={(spell) => setSpellSelector(draft => draft.toggle(spell))} />
    </div>
  )
}

export default RoleStepArcanistChoosePathMage