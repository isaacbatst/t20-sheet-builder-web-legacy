import { immerable } from "immer";
import { AttributesLauncherPerPurchase } from "../../components/SheetBuilderSection/InitialAttributesDefinitionStep/AttributesLauncherPerPurchase";

export class AttributesLauncherPerPurchaseImmerable extends AttributesLauncherPerPurchase {
  [immerable] = true
}