import { useRef } from "react"
import { AttributesLauncherPerPurchaseInterface } from "./InitialAttributesDefinitionStep/AttributesLauncherPerPurchase"
import { ChooseRaceStepInterface } from "./ChooseRaceStep/ChooseRaceStep"
import { SheetBuilderForm } from "./SheetBuilderForm"
import { SheetBuilderStepsInterface } from "./SheetBuilderSteps"

export const useSheetBuilderForm = (params: {
  sheetBuilderSteps: SheetBuilderStepsInterface
  attributesLauncher: AttributesLauncherPerPurchaseInterface,
  chooseRaceStep: ChooseRaceStepInterface
}) => {
  const ref = useRef(new SheetBuilderForm(
    params.sheetBuilderSteps,
    params.attributesLauncher, 
    params.chooseRaceStep
  ))

  return ref.current
}