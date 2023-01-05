import { immerable } from "immer";
import { AttributesLauncherPerPurchase } from "../../domain/entities/AttributesBuyingSystem";

export class AttributesLauncherPerPurchaseImmerable extends AttributesLauncherPerPurchase {
  [immerable] = true
}