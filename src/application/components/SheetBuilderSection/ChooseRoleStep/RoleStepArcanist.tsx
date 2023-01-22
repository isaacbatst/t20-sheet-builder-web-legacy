import React, { useEffect, useState } from 'react'
import { ArcanistPath } from 't20-sheet-builder/build/domain/entities/Role/Arcanist/ArcanistPath/ArcanistPath'
import { useImmer } from 'use-immer'
import { RoleFactoryArcanist } from '../../../../domain/entities/RoleFactoryArcanist'
import RoleStepArcanistChoosePath from './RoleStepArcanistChoosePath'
import RoleStepArcanistChooseSpells from './RoleStepArcanistChooseSpells'
import { RoleStepArcanistChooseSpellsSelector } from './RoleStepArcanistChooseSpellsSelector'
import withRoleWrapper, { RoleStepWrappedProps } from './withRoleStep'

const RoleStepArcanist: React.FC<RoleStepWrappedProps> = ({ chosenSkills, setFactory }) => {
  const [path, setPath] = useState<ArcanistPath>();
  const [selector, setSelector] = useImmer(new RoleStepArcanistChooseSpellsSelector());

  useEffect(() => {
    if(!path) return

    setFactory(new RoleFactoryArcanist(
      chosenSkills,
      path,
      selector.getChosenItems().map(Spell => new Spell())
    ))
  }, [chosenSkills, path, setFactory, selector])

  return (
    <>
      <RoleStepArcanistChoosePath setPath={setPath} />
      <RoleStepArcanistChooseSpells selector={selector} setSelector={setSelector} />
    </>
  )
}

export default withRoleWrapper(RoleStepArcanist)