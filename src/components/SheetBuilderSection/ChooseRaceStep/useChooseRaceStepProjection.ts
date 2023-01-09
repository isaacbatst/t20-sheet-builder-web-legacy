import { useState } from "react";
import { ChooseRaceStepProjectionDecorator } from "./ChooseRaceStepProjectionDecorator";
import { useChooseRaceStep } from "./useChooseRaceStep"

export const useChooseRaceStepProjection = () => {
  const chooseRaceStep = useChooseRaceStep();
  const [projection, setProjection] = useState(chooseRaceStep.getDTO());

  return new ChooseRaceStepProjectionDecorator(chooseRaceStep, setProjection)
}