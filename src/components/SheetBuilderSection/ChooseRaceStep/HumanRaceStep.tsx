import { Attribute, GeneralPowerName, Human, SkillName, Translator, VersatileChoiceSkill, VersatileChoiceType } from 't20-sheet-builder'
import { useImmer } from 'use-immer'
import Button from '../../Button/Button'
import { RaceStepComponent } from './ChooseRaceStep'
import HumanRaceStepAttributesSelection from './HumanRaceStepAttributesSelection'
import { HumanRaceStepAttributesSelectorImmerable } from './HumanRaceStepAttributesSelectorImmerable'
import { useHumanVersatile } from './useHumanVersatile'

const HumanRaceStep: RaceStepComponent = ({ chooseRace: setRace }) => {
  const { firstVersatileChoice,secondChoiceTitle, secondVersatileChoice, setFirstVersatileChoice, setSecondVersatileChoice, setDefaultChoice } = useHumanVersatile();
  const [selector, setSelector] = useImmer(new HumanRaceStepAttributesSelectorImmerable());

  return (
    <div>
      <HumanRaceStepAttributesSelection 
        handleChange={(attribute: Attribute) => setSelector(draft => draft.toggleAttribute(attribute))}
        selector={selector}
      />
      <div>
        <div>Versátil</div>
        <div className='flex justify-center items-center mb-2'>
          <div className='mr-2'>Escolha uma perícia: </div> 
          <div>
            <select className='p-2' name="versatile-option-1" id="versatile-option-1" value={firstVersatileChoice.name} onChange={e => setFirstVersatileChoice(new VersatileChoiceSkill(e.target.value as SkillName))}>
              {Object.values(SkillName).map(skill => <option key={skill} value={skill}>{Translator.getSkillTranslation(skill)}</option>)}
            </select>
          </div>
        </div> 
        <div className="flex justify-center items-center mb-2">
          <div className='mr-2'>Segunda opção:</div> 
          <select className='p-2' name="versatile-option-2-type" id="versatile-option-2-type" value={secondVersatileChoice.type} 
            onChange={(e) => setDefaultChoice(e.target.value as VersatileChoiceType)}>
            <option value='skill'>Perícia</option>
            <option value='power'>Poder</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <div className='mr-2'>Escolha {secondChoiceTitle}:</div> 
          <div>
            <select className='p-2' name="versatile-option-2" id="versatile-option-2"
              value={secondVersatileChoice.name} onChange={e => {
                setSecondVersatileChoice({ type: secondVersatileChoice.type, value: e.target.value as any})
              }}  
            >
              {
                secondVersatileChoice.type === 'skill' && Object.values(SkillName).map(skill =>
                   <option key={skill} value={skill}>{Translator.getSkillTranslation(skill)}</option>
                )
              }
              {
                secondVersatileChoice.type === 'power' && Object.values(GeneralPowerName).map(power => 
                  <option  key={power} value={power}>{Translator.getPowerTranslation(power)}</option>
                )
              }
            </select>
          </div>
        </div>
        <Button onClick={() => {
          const human = new Human(selector.getSelectedAttributes())
          human.addVersatilChoice(firstVersatileChoice)
          human.addVersatilChoice(secondVersatileChoice)
          setRace(human)
        }}>
          Escolher raça
        </Button>
      </div>   
    </div>
  )
}

export default HumanRaceStep