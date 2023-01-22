import HumanRaceStepAttributesSelection from './HumanRaceStepAttributesSelection';
import { HumanRaceStepProjectionDecorator } from './HumanRaceStepDecoratorProjection';
import HumanRaceStepVersatileView from './HumanRaceStepVersatileView';

type Props = {
  humanRaceStep: HumanRaceStepProjectionDecorator
}

const HumanRaceStepView: React.FC<Props> = ({ humanRaceStep }) => {
  return (
    <div>
      <HumanRaceStepAttributesSelection selector={humanRaceStep.getSelector()}/>
      <HumanRaceStepVersatileView versatile={humanRaceStep.getVersatile()} />
    </div>
  )
}

export default HumanRaceStepView