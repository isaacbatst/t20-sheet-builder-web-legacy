import { immerable } from "immer";
import { AttributesLauncherPerPurchase } from "../../application/components/SheetBuilderSection/InitialAttributesDefinitionStep/AttributesLauncherPerPurchase";

export class AttributesLauncherPerPurchaseImmerable extends AttributesLauncherPerPurchase {
  [immerable] = true
}