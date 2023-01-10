import { useRef } from "react"
import { SheetBuilderSteps } from "./SheetBuilderSteps"

export const useSheetBuilderSteps = () => {
  const ref = useRef(new SheetBuilderSteps())

  return ref.current
}