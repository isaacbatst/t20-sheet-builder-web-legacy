import { useState } from "react";
import { AttributesLauncherPerPurchaseInterface } from "./AttributesLauncherPerPurchase";
import { AttributesLauncherPerPurchaseProjectionDecorator } from "./AttributesLauncherPerPurchaseProjectionDecorator";

export const useAttributesLauncherPerPurchaseProjection = (
  attributesLauncherPerPurchase: AttributesLauncherPerPurchaseInterface
) => {
  const [projection, setProjection] = useState(attributesLauncherPerPurchase.getDTO())

  return new AttributesLauncherPerPurchaseProjectionDecorator(
    attributesLauncherPerPurchase,
    setProjection
  )
}