import { Attribute, GeneralPowerName, Human, SkillName, Translator, VersatileChoiceSkill, VersatileChoiceType } from 't20-sheet-builder'
import { useImmer } from 'use-immer'
import Button from '../../common/Button/Button'
import { RaceStepComponent } from './ChooseRaceStep'
import HumanRaceStepAttributesSelection from './HumanRaceStepAttributesSelection'
import { HumanRaceStepAttributesSelectorImmerable } from './HumanRaceStepAttributesSelectorImmerable'
import HumanRaceStepVersatile from './HumanRaceStepVersatile'
import { useHumanVersatile } from './useHumanVersatile'

const HumanRaceStep: RaceStepComponent = ({ chooseRace: setRace }) => {
  const humanVersatile = useHumanVersatile();
  const [selector, setSelector] = useImmer(new HumanRaceStepAttributesSelectorImmerable());

  return (
    <div>
      <HumanRaceStepAttributesSelection 
        handleChange={(attribute: Attribute) => setSelector(draft => draft.toggleAttribute(attribute))}
        selector={selector}
      />
      <HumanRaceStepVersatile {...humanVersatile} />
      <div>
        <Button onClick={() => {
          const human = new Human(selector.getSelectedAttributes())
          human.addVersatilChoice(humanVersatile.firstVersatileChoice)
          human.addVersatilChoice(humanVersatile.secondVersatileChoice)
          setRace(human)
        }}>
          Confirmar Raça
        </Button>
      </div>   
    </div>
  )
}

export default HumanRaceStep