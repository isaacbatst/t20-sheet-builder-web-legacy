import React, { useContext } from 'react'
import { RoleInterface } from 't20-sheet-builder';
import { SheetBuilderSectionContext } from '../SheetBuilderSectionContext'
import WarriorRoleStep from './WarriorRoleStep';

const ChooseRoleStep: React.FC = () => {
  const context = useContext(SheetBuilderSectionContext);
  const chooseRole = (role: RoleInterface) => {
    context.setRole(role)
  }
  return (
    <div>
      <div>Escolha sua classe</div>
      <WarriorRoleStep />
    </div>
  )
}

export default ChooseRoleStep