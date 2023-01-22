import { createContext, PropsWithChildren, useContext } from "react";
import { ChooseRaceStep } from "./ChooseRaceStep/ChooseRaceStep";
import { useChooseRaceStepProjection } from "./ChooseRaceStep/useChooseRaceStepProjection";
import { useAttributesLauncherPerPurchaseProjection } from "./InitialAttributesDefinitionStep/useAttributesLauncherPerPurchaseProjection";
import { useAttributesLauncherPerPurchaseRef } from "./InitialAttributesDefinitionStep/useAttributesLauncherPerPurchaseRef";
import { SheetBuilderFormInterface } from "./SheetBuilderForm";
import { SheetBuilderSlider } from "./SheetBuilderSlider";
import { SheetBuilderStepChooseRace } from "./SheetBuilderStepChooseRace";
import { SheetBuilderStepChooseRole } from "./SheetBuilderStepChooseRole";
import { SheetBuilderStepInitialAttributesDefinition } from "./SheetBuilderStepInitialAttributesDefinition";
import { useSheetBuilderFormProjection } from "./useSheetBuilderFormProjection";
import { useSheetBuilderStepsProjection } from "./useSheetBuilderStepsProjection";

type SheetBuilderFormContextType = {
  sheetBuilderForm: SheetBuilderFormInterface,
}

const SheetBuilderFormContext = createContext<SheetBuilderFormContextType>(null as unknown as SheetBuilderFormContextType)

export const SheetBuilderFormContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const attributesLauncherRef = useAttributesLauncherPerPurchaseRef();
  const attributesLauncher = useAttributesLauncherPerPurchaseProjection(attributesLauncherRef)
  const chooseRaceStep = useChooseRaceStepProjection(new ChooseRaceStep())
  const sheetBuilderStepInitialAttributesDefinition = new SheetBuilderStepInitialAttributesDefinition(
    attributesLauncher,  
  );
  const sheetBuilderStepChooseRace = new SheetBuilderStepChooseRace();
  const sheetBuilderStepChooseRole = new SheetBuilderStepChooseRole();
  const sheetBuilderSlider = useSheetBuilderStepsProjection(new SheetBuilderSlider(
    sheetBuilderStepInitialAttributesDefinition,
    sheetBuilderStepChooseRace,
    sheetBuilderStepChooseRole
  ))
  const sheetBuilderForm = useSheetBuilderFormProjection(sheetBuilderSlider, attributesLauncher, chooseRaceStep);

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