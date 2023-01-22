import { useRef } from "react"
import { SheetBuilderSlider } from "./SheetBuilderSlider"

export const useSheetBuilderSteps = () => {
  const ref = useRef(new SheetBuilderSlider())

  return ref.current
}