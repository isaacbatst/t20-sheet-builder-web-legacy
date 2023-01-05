import React from 'react'
import { Warrior } from 't20-sheet-builder'
import WarriorRoleStepSkillSelection from './WarriorRoleStepSkillSelection'


const WarriorRoleStep: React.FC = () => {
  return <div>
    <div>Guerreiro</div>
    {Warrior.chooseableSkills.map((skillGroup, index) => <WarriorRoleStepSkillSelection key={index} skillGroup={skillGroup} />)}
  </div>
}

export default WarriorRoleStep