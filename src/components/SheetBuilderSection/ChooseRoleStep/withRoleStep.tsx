import React, { useContext, useMemo } from "react";
import { SelectSkillGroup, RoleInterface, RoleName, SkillName, Translator } from "t20-sheet-builder";
import { useImmer } from "use-immer";
import { RoleFactory } from "../../../domain/entities/RoleFactory";
import { ImmerableRoleSkillSelectors } from "../../../infra/immerable/ImmerableRoleSkillSelectors";
import Button from "../../common/Button/Button";
import { SheetBuilderSectionContext } from "../SheetBuilderSectionContext";
import RoleSkillSelection from "./RoleSkillSelection";

export type RoleStepWrapperProps = {
  role: { roleName: RoleName, selectSkillGroups: SelectSkillGroup[] }
}

export type RoleStepWrappedProps = {
  chosenSkills: SkillName[],
  setFactory(factory: RoleFactory): void
}

export type CreateRole = () => RoleInterface

const withRoleWrapper = (RoleComponent:  React.FC<RoleStepWrappedProps>) => {
  const WithRoleWrapper: React.FC<RoleStepWrapperProps> = ({ role: {selectSkillGroups} }) => {
    const context = useContext(SheetBuilderSectionContext);
    const [roleSkillSelectors, setRoleSkillGroupSelector] = useImmer(new ImmerableRoleSkillSelectors(selectSkillGroups))
    const [roleFactory, setRoleFactory] = useImmer<RoleFactory | undefined>(undefined)
    
    const chosenSkills = useMemo(() => {
      return roleSkillSelectors.getChosenSkills()
    }, [roleSkillSelectors])

    return (
      <div className='mb-4'>
        <div className="mb-3">
          {roleSkillSelectors.selectors.map((selector, index) => 
            <RoleSkillSelection 
              key={index} 
              selector={selector} 
              handleChange={(skill: SkillName) => setRoleSkillGroupSelector(draft => draft.selectors[index].toggle(skill))} 
            />)}
          {<RoleComponent chosenSkills={chosenSkills} setFactory={setRoleFactory} />}
        </div>
        <Button
          disabled={!roleFactory}
          onClick={() => {
            if(!roleFactory) throw new Error('UNDEFINED_ROLE_BUILDER')

            context.setRole(roleFactory.make())
          }}
        >
          Confirmar Classe
        </Button>
      </div>
    )
  }
  WithRoleWrapper.displayName = `WithRoleStepWrapper(${RoleComponent.displayName})`

  return WithRoleWrapper;
}

export default withRoleWrapper;