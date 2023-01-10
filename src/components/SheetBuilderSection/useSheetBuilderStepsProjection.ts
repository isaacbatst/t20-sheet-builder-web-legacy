import { useState } from "react"
import { SheetBuilderStepsProjectionDecorator } from "./SheetBuilderStepsProjectionDecorator"
import { useSheetBuilderSteps } from "./useSheetBuilderSteps"

export const useSheetBuilderStepsProjection = () => {
  const sheetBuilderSteps = useSheetBuilderSteps()
  const [projection, setProjection] = useState(sheetBuilderSteps.getDTO())

  return new SheetBuilderStepsProjectionDecorator(
    sheetBuilderSteps,
    setProjection
  )
}