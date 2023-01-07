import React from 'react'
import { SkillName, Translator } from 't20-sheet-builder'
import Checkbox from '../../common/Checkbox/Checkbox'
import { SkillCheckboxSelector } from './RoleSkillSelector'

type Props = {
  selector: SkillCheckboxSelector
  handleChange: (skill: SkillName) => void
}

const RoleSkillSelection: React.FC<Props> = ({ selector, handleChange }) => {
  return (
    <div className='mb-2'>
      <div className='mb-1'>Escolha {selector.amountLimit} perícia{selector.amountLimit > 1 ? 's' : ''}:</div>
      <div className='flex flex-wrap justify-center'>
        {Array.from(selector.items, ([skill, checked]) => ({ skill, checked })).map(({ checked, skill }) => 
          <Checkbox  key={skill} checked={checked} handleChange={() => handleChange(skill)}>{Translator.getSkillTranslation(skill)}</Checkbox>)
        }
      </div>
    </div>
  )
}

export default RoleSkillSelection