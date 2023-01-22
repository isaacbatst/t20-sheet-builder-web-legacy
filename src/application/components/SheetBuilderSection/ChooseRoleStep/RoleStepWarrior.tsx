import { useEffect } from 'react'
import { RoleFactoryWarrior } from '../../../../domain/entities/RoleFactoryWarrior'
import withRoleWrapper, { RoleStepWrappedProps } from './withRoleStep'

const RoleStepWarrior: React.FC<RoleStepWrappedProps> = ({chosenSkills, setFactory: setFactory}) => {
  useEffect(
    () => {
      setFactory(new RoleFactoryWarrior(chosenSkills))
    },
    [chosenSkills, setFactory],
  )
  
  return (
    <></>
  )
}

export default withRoleWrapper(RoleStepWarrior)