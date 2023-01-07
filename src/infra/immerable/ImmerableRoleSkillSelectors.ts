import { immerable } from "immer";
import { RoleSkillSelectors } from "../../components/SheetBuilderSection/ChooseRoleStep/RoleSkillGroupSelector";

export class ImmerableRoleSkillSelectors extends RoleSkillSelectors {
  [immerable] = true
}