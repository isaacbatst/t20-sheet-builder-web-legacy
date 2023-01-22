import { useState } from "react"
import { SheetBuilderSliderInterface } from "./SheetBuilderSlider"
import { SheetBuilderStepsProjectionDecorator } from "./SheetBuilderStepsProjectionDecorator"

export const useSheetBuilderStepsProjection = (sheetBuilderSteps: SheetBuilderSliderInterface) => {
  const [projection, setProjection] = useState(sheetBuilderSteps.getDTO())

  return new SheetBuilderStepsProjectionDecorator(
    sheetBuilderSteps,
    setProjection
  )
}