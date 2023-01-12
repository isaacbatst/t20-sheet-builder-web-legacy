import { useState } from "react"
import { SheetBuilderStepsInterface } from "./SheetBuilderSteps"
import { SheetBuilderStepsProjectionDecorator } from "./SheetBuilderStepsProjectionDecorator"

export const useSheetBuilderStepsProjection = (sheetBuilderSteps: SheetBuilderStepsInterface) => {
  const [projection, setProjection] = useState(sheetBuilderSteps.getDTO())

  return new SheetBuilderStepsProjectionDecorator(
    sheetBuilderSteps,
    setProjection
  )
}