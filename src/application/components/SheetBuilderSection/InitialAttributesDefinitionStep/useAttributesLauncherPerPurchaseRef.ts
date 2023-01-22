import { useRef } from "react"
import { AttributesLauncherPerPurchase, AttributesLauncherPerPurchaseInterface } from "./AttributesLauncherPerPurchase";

export const useAttributesLauncherPerPurchaseRef = () => {
  const ref = useRef<AttributesLauncherPerPurchaseInterface>(new AttributesLauncherPerPurchase());

  return ref
}