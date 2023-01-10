import React, { useMemo, useState } from 'react';
import { Arcanist, SelectSkillGroup, RoleName, Translator, Warrior } from 't20-sheet-builder';
import { Option } from '../../../domain/entities/Option';
import RoleStepArcanist from './RoleStepArcanist';
import RoleStepWarrior from './RoleStepWarrior';
import { RoleStepWrapperProps } from './withRoleStep';
import Select from 'react-select'

const rolesComponents: Record<RoleName, { Component: React.FC<RoleStepWrapperProps>, roleClass: { roleName: RoleName, selectSkillGroups: SelectSkillGroup[] } }> = {
  arcanist: {roleClass: Arcanist, Component: RoleStepArcanist},
  warrior: {roleClass: Warrior, Component: RoleStepWarrior},
}

const options: Option<RoleName>[] = Object.values(RoleName).map(role => ({
  label: Translator.getRoleTranslation(role),
  value: role
}))

const ChooseRoleStepView: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleName>(RoleName.warrior)
  const role = useMemo(() => {
    return rolesComponents[selectedRole]
  }, [selectedRole])

  return (
    <div className='mb-6'>
      <div className="flex items-center justify-center a mb-3">
        <h2 className='mr-2'>3 - Escolha sua classe</h2>
        <Select placeholder='Classe' options={options} onChange={(selected) => selected && setSelectedRole(selected.value)} />
      </div>
      <role.Component role={role.roleClass} />
    </div>
  )
}

export default ChooseRoleStepView