import { createContext, PropsWithChildren, useContext } from "react";
import { ChooseRaceStep } from "./ChooseRaceStep/ChooseRaceStep";
import { useChooseRaceStepProjection } from "./ChooseRaceStep/useChooseRaceStepProjection";
import { AttributesLauncherPerPurchase } from "./InitialAttributesDefinitionStep/AttributesLauncherPerPurchase";
import { useAttributesLauncherPerPurchaseProjection } from "./InitialAttributesDefinitionStep/useAttributesLauncherPerPurchaseProjection";
import { SheetBuilderFormInterface } from "./SheetBuilderForm";
import { SheetBuilderSteps } from "./SheetBuilderSteps";
import { useSheetBuilderFormProjection } from "./useSheetBuilderFormProjection";
import { useSheetBuilderStepsProjection } from "./useSheetBuilderStepsProjection";

type SheetBuilderFormContextType = {
  sheetBuilderForm: SheetBuilderFormInterface,
}

const SheetBuilderFormContext = createContext<SheetBuilderFormContextType>(null as unknown as SheetBuilderFormContextType)

export const SheetBuilderFormContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const sheetBuilderSteps = useSheetBuilderStepsProjection(new SheetBuilderSteps())
  const attributesLauncher = useAttributesLauncherPerPurchaseProjection(new AttributesLauncherPerPurchase())
  const chooseRaceStep = useChooseRaceStepProjection(new ChooseRaceStep())
  const sheetBuilderForm = useSheetBuilderFormProjection(sheetBuilderSteps, attributesLauncher, chooseRaceStep);

  return <SheetBuilderFormContext.Provider value={{
    sheetBuilderForm,
  }}>
    {children}
  </SheetBuilderFormContext.Provider>
}

export const useSheetBuilderFormContext = () => {
  const context = useContext(SheetBuilderFormContext)

  if(!context) throw new Error('MISSING_PROVIDER')

  return context
}