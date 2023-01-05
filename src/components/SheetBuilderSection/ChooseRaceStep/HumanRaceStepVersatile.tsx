import React from 'react'
import { GeneralPowerName, SkillName, Translator, VersatileChoice, VersatileChoiceSkill, VersatileChoiceType } from 't20-sheet-builder'
import { SetSecondVersatileChoiceParams } from './useHumanVersatile'

type Props = {
  firstVersatileChoice: VersatileChoiceSkill,
  setFirstVersatileChoice(choice: VersatileChoiceSkill): void
  setDefaultChoice(type: VersatileChoiceType): void
  secondVersatileChoice: VersatileChoice,
  setSecondVersatileChoice: (params: SetSecondVersatileChoiceParams) => void
}

const HumanRaceStepVersatile: React.FC<Props> = ({ firstVersatileChoice, secondVersatileChoice, setFirstVersatileChoice, setDefaultChoice, setSecondVersatileChoice }) => {
  const secondChoiceTitle = secondVersatileChoice.type === 'power' ? 'um poder' : 'uma perícia'
  
  return (
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
        <div className="flex justify-center items-center mb-3">
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
    </div>
  )
}

export default HumanRaceStepVersatile