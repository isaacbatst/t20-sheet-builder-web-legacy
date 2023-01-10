import { createContext, PropsWithChildren, useState } from "react";
import { RaceInterface, RoleInterface } from "t20-sheet-builder";
import { Updater, useImmer } from "use-immer";
import { AttributesLauncherPerPurchase } from "../../domain/entities/AttributesBuyingSystem";
import { AttributesLauncherPerPurchaseImmerable } from "../../infra/immerable/ImmerableAttributesBuyingSystem";
import { SheetBuilderStepsInterface } from "./SheetBuilderSteps";
import { useSheetBuilderStepsProjection } from "./useSheetBuilderStepsProjection";

type SheetBuilderSectionContextType = {
  attributesLauncher: AttributesLauncherPerPurchase
  race?: RaceInterface,
  role?: RoleInterface,
  sheetBuilderSteps: SheetBuilderStepsInterface
  setAttributesLauncher: Updater<AttributesLauncherPerPurchase>
  setRace: (race?: RaceInterface) => void,
  setRole: (role: RoleInterface) => void,
}

export const SheetBuilderSectionContext = createContext<SheetBuilderSectionContextType>(null as unknown as SheetBuilderSectionContextType)

export const SheetBuilderSectionContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [race, setRace] = useState<RaceInterface>()
  const [role, setRole] = useState<RoleInterface>()
  const [attributesLauncher, setAttributesLauncher] = useImmer<AttributesLauncherPerPurchase>(new AttributesLauncherPerPurchaseImmerable({strength: 0 , dexterity: 0, constitution: 0,  intelligence: 0 , wisdom: 0, charisma: 0  }))
  const sheetBuilderSteps = useSheetBuilderStepsProjection();

  return <SheetBuilderSectionContext.Provider value={{
    race, setRace,
    attributesLauncher, setAttributesLauncher,
    role, setRole,
    sheetBuilderSteps
  }}>
    {children}
  </SheetBuilderSectionContext.Provider>
}
