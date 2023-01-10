import { createContext, PropsWithChildren, useState } from "react";
import { RaceInterface, RoleInterface } from "t20-sheet-builder";
import { Updater, useImmer } from "use-immer";
import { AttributesLauncherPerPurchase } from "../../domain/entities/AttributesBuyingSystem";
import { AttributesLauncherPerPurchaseImmerable } from "../../infra/immerable/ImmerableAttributesBuyingSystem";
import { ChooseRaceStepProjectionDecorator } from "./ChooseRaceStep/ChooseRaceStepProjectionDecorator";
import { RaceStepInterface } from "./ChooseRaceStep/RaceStep";
import { useChooseRaceStepProjection } from "./ChooseRaceStep/useChooseRaceStepProjection";
import { SheetBuilderStepsInterface } from "./SheetBuilderSteps";
import { useSheetBuilderStepsProjection } from "./useSheetBuilderStepsProjection";

type SheetBuilderSectionContextType = {
  attributesLauncher: AttributesLauncherPerPurchase
  race?: RaceInterface,
  role?: RoleInterface,
  error?: string,
  sheetBuilderSteps: SheetBuilderStepsInterface
  chooseRaceStep: ChooseRaceStepProjectionDecorator
  setAttributesLauncher: Updater<AttributesLauncherPerPurchase>
  setRace: (race?: RaceInterface) => void,
  setRole: (role: RoleInterface) => void,
  setError: (error?: string) => void,
  confirmRace: (selectedRace: RaceStepInterface | undefined) => void
}

export const SheetBuilderSectionContext = createContext<SheetBuilderSectionContextType>(null as unknown as SheetBuilderSectionContextType)

export const SheetBuilderSectionContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [race, setRace] = useState<RaceInterface>()
  const [role, setRole] = useState<RoleInterface>()
  const [error, setError] = useState<string>()
  const [attributesLauncher, setAttributesLauncher] = useImmer<AttributesLauncherPerPurchase>(new AttributesLauncherPerPurchaseImmerable({strength: 0 , dexterity: 0, constitution: 0,  intelligence: 0 , wisdom: 0, charisma: 0  }))
  const sheetBuilderSteps = useSheetBuilderStepsProjection();
  const chooseRaceStep = useChooseRaceStepProjection();

  const confirmRace = (selectedRace: RaceStepInterface | undefined) => {
    try {
      setError(undefined)
      if(!selectedRace) throw new Error('UNDEFINED_RACE')

      if(selectedRace) {
        setRace(selectedRace.build())
        sheetBuilderSteps.next()
      }
    } catch(err) {
      if(!(err instanceof Error)){
        return setError('UNKNOWN ERROR')
      }

      setError(err.message)
    }
  }

  return <SheetBuilderSectionContext.Provider value={{
    race, setRace,
    attributesLauncher, setAttributesLauncher,
    role, setRole,
    sheetBuilderSteps,
    error, setError,
    confirmRace, chooseRaceStep
  }}>
    {children}
  </SheetBuilderSectionContext.Provider>
}
