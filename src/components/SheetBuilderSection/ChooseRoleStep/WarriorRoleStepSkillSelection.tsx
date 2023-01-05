import React from 'react'
import { ChooseableSkills, Translator } from 't20-sheet-builder'
import { useImmer } from 'use-immer'
import Checkbox from '../../Checkbox/Checkbox'
import { WarriorRoleStepSelector } from './WarriorRoleStepSelector'

type Props = {
  skillGroup: ChooseableSkills
}

const WarriorRoleStepSkillSelection: React.FC<Props> = ({ skillGroup }) => {
  const [selector, setSelector] = useImmer(new WarriorRoleStepSelector(skillGroup))

  return (
    <div>
      <div>Selecione as perícias (máximo {selector.amountLimit}):</div>
      <div className='flex flex-wrap justify-center'>
        {Array.from(selector.skills, ([skill, checked]) => ({ skill, checked })).map(({ checked, skill }) => 
          <Checkbox  key={skill} checked={checked} handleChange={() => setSelector(draft => draft.toggle(skill))}>{Translator.getSkillTranslation(skill)}</Checkbox>)
        }
      </div>
    </div>
  )
}

export default WarriorRoleStepSkillSelection