import { createContext, PropsWithChildren, useState } from "react";
import { RaceInterface } from "t20-sheet-builder";
import { Updater, useImmer } from "use-immer";
import { AttributesLauncherPerPurchase } from "../../domain/entities/AttributesBuyingSystem";
import { AttributesLauncherPerPurchaseImmerable } from "../../infra/immerable/ImmerableAttributesBuyingSystem";

type SheetBuilderSectionContextType = {
  attributesLauncher: AttributesLauncherPerPurchase
  setAttributesLauncher: Updater<AttributesLauncherPerPurchase>
  setRace: (race: RaceInterface) => void,
  race?: RaceInterface,
}

export const SheetBuilderSectionContext = createContext<SheetBuilderSectionContextType>(null as unknown as SheetBuilderSectionContextType)

export const SheetBuilderSectionContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [race, setRace] = useState<RaceInterface>()
  const [attributesLauncher, setAttributesLauncher] = useImmer<AttributesLauncherPerPurchase>(new AttributesLauncherPerPurchaseImmerable({strength: 0 , dexterity: 0, constitution: 0,  intelligence: 0 , wisdom: 0, charisma: 0  }))

  return <SheetBuilderSectionContext.Provider value={{
    race, setRace,
    attributesLauncher, setAttributesLauncher
  }}>
    {children}
  </SheetBuilderSectionContext.Provider>
}
