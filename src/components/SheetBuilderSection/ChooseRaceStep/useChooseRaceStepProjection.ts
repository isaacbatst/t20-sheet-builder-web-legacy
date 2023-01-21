import { useState } from "react";
import { ChooseRaceStepInterface } from "./ChooseRaceStep";
import { ChooseRaceStepProjectionDecorator } from "./ChooseRaceStepProjectionDecorator";

export const useChooseRaceStepProjection = (chooseRaceStep: ChooseRaceStepInterface) => {
  const [projection, setProjection] = useState(ChooseRaceStepProjectionDecorator.getProjection(chooseRaceStep));

  return new ChooseRaceStepProjectionDecorator(chooseRaceStep, setProjection)
}