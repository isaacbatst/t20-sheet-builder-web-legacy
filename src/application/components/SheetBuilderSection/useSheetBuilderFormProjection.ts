import { useState } from "react"
import { ChooseRaceStepInterface } from "./ChooseRaceStep/ChooseRaceStep"
import { AttributesLauncherPerPurchaseInterface } from "./InitialAttributesDefinitionStep/AttributesLauncherPerPurchase"
import { SheetBuilderFormProjectionDecorator } from "./SheetBuilderFormProjectionDecorator"
import { SheetBuilderSliderInterface } from "./SheetBuilderSlider"
import { useSheetBuilderForm } from "./useSheetBuilderForm"

export const useSheetBuilderFormProjection = (
  sheetBuilderSteps: SheetBuilderSliderInterface,
  attributesLauncher: AttributesLauncherPerPurchaseInterface,
  chooseRaceStep: ChooseRaceStepInterface,
) => {
  const sheetBuilderForm = useSheetBuilderForm({
    sheetBuilderSteps,
    attributesLauncher,
    chooseRaceStep
  })
  const [projection, setProjection] = useState(SheetBuilderFormProjectionDecorator.getProjection(sheetBuilderForm))
  
  return new SheetBuilderFormProjectionDecorator(sheetBuilderForm, setProjection)
}