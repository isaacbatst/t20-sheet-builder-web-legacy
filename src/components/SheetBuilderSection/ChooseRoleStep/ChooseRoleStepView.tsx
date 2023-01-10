import React, { useMemo, useState } from 'react';
import { Arcanist, SelectSkillGroup, RoleName, Translator, Warrior } from 't20-sheet-builder';
import RoleStepArcanist from './RoleStepArcanist';
import RoleStepWarrior from './RoleStepWarrior';
import { RoleStepWrapperProps } from './withRoleStep';

const rolesComponents: Record<RoleName, { Component: React.FC<RoleStepWrapperProps>, roleClass: { roleName: RoleName, selectSkillGroups: SelectSkillGroup[] } }> = {
  arcanist: {roleClass: Arcanist, Component: RoleStepArcanist},
  warrior: {roleClass: Warrior, Component: RoleStepWarrior},
}

const ChooseRoleStepView: React.FC = () => {
  const [selected, setSelected] = useState<RoleName>(RoleName.warrior)
  const role = useMemo(() => {
    return rolesComponents[selected]
  }, [selected])

  return (
    <div className='mb-6'>
      <div className="flex justify-center mb-3">
        <h2>3 - Escolha sua classe</h2>
        <select name="role" id="role" value={selected} onChange={(e) => setSelected(e.target.value as RoleName)}>
          {Object.keys(rolesComponents).map((key) => {
            const name = key as RoleName;
            return <option key={name} value={name}>{Translator.getRoleTranslation(name)}</option>
          })}
        </select>
      </div>
      <role.Component role={role.roleClass} />
    </div>
  )
}

export default ChooseRoleStepView