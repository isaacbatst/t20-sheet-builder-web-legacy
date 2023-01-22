import { MutableRefObject, useState } from "react";
import { AttributesLauncherPerPurchaseInterface } from "./AttributesLauncherPerPurchase";
import { AttributesLauncherPerPurchaseProjectionDecorator } from "./AttributesLauncherPerPurchaseProjectionDecorator";

export const useAttributesLauncherPerPurchaseProjection = (
  attributesLauncherRef: MutableRefObject<AttributesLauncherPerPurchaseInterface> 
) => {
  const [projection, setProjection] = useState(
    AttributesLauncherPerPurchaseProjectionDecorator.getProjection(attributesLauncherRef.current)
  )

  return new AttributesLauncherPerPurchaseProjectionDecorator(
    attributesLauncherRef.current,
    setProjection
  )
}