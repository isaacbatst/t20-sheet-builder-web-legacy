import HumanRaceStepAttributesSelectorView from './HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelectorView';
import { HumanRaceStepProjectionDecorator } from './HumanRaceStepDecoratorProjection';
import HumanRaceStepVersatileView from './HumanRaceStepVersatile/HumanRaceStepVersatileView';

type Props = {
  humanRaceStep: HumanRaceStepProjectionDecorator
}

const HumanRaceStepView: React.FC<Props> = ({ humanRaceStep }) => {
  return (
    <div>
      <HumanRaceStepAttributesSelectorView selector={humanRaceStep.getSelector()}/>
      <HumanRaceStepVersatileView versatile={humanRaceStep.getVersatile()} />
    </div>
  )
}

export default HumanRaceStepView