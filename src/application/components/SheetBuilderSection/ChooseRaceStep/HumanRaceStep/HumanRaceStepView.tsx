import { Attributes } from 't20-sheet-builder';
import { HumanRaceStepAttributesSelectorProjectionDecorator } from './HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelectorProjectionDecorator';
import HumanRaceStepAttributesSelectorView from './HumanRaceStepAttributesSelector/HumanRaceStepAttributesSelectorView';
import { HumanRaceStepVersatileProjectionDecorator } from './HumanRaceStepVersatile/HumanRaceStepVersatileProjectionDecorator';
import HumanRaceStepVersatileView from './HumanRaceStepVersatile/HumanRaceStepVersatileView';

type Props = {
  selector: HumanRaceStepAttributesSelectorProjectionDecorator,
  versatile: HumanRaceStepVersatileProjectionDecorator
  initialAttributes: Attributes
}

const HumanRaceStepView: React.FC<Props> = ({ selector, versatile, initialAttributes }) => {
  return (
    <div>
      <HumanRaceStepAttributesSelectorView initialAttributes={initialAttributes} selector={selector}/>
      <HumanRaceStepVersatileView versatile={versatile} />
    </div>
  )
}

export default HumanRaceStepView