import { PropsWithChildren } from "react"
import Button from "../../common/Button/Button";
import { RaceStepInterface } from "./RaceStep";

type Props = PropsWithChildren<{
  raceStep: RaceStepInterface
}>

const RaceStepWrapper: React.FC<Props> = ({ children, raceStep }) => {
  return (
    <div>
      {children}
      <div>

      </div> 
    </div>
  )
}

export default RaceStepWrapper