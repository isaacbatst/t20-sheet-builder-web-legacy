import React, { useState } from 'react'
import { GeneralPowerFactory, GeneralPowerName, SkillName, Translator, VersatileChoicePower, VersatileChoiceSkill, VersatileChoiceType } from 't20-sheet-builder'
import { Option } from '../../../../../domain/entities/Option'
import Select from 'react-select';
import { HumanRaceStepVersatileInterface } from './HumanRaceStepVersatile';

type Props = {
  versatile: HumanRaceStepVersatileInterface
}

const secondChoiceTypeOptions: Option<VersatileChoiceType>[] = [
  {label: 'Perícia', value: 'skill'},
  {label: 'Poder', value: 'power'}
]

const skillOptions: Option<SkillName>[] = Object.values(SkillName).map(skill => ({
  label: Translator.getSkillTranslation(skill),
  value: skill
}))

const powerOptions: Option<GeneralPowerName>[] = Object.values(GeneralPowerName).map(power => ({
  label: Translator.getPowerTranslation(power),
  value: power
}))

const HumanRaceStepVersatileView: React.FC<Props> = ({ versatile }) => {
  const [secondChoiceType, setSecondChoiceType] = useState<VersatileChoiceType>();
  
  return (
    <div>
      <h3 className='mb-2'>Versátil</h3 >
      <div className='flex justify-center items-center mb-1'>
        <div className="flex justify-center items-center mb-1">
          <div className='mr-1'>Primeira opção: </div> 
          <Select options={skillOptions}
              instanceId='versatile-first-choice'
              onChange={(selected) => selected && versatile.selectFirstChoice(new VersatileChoiceSkill(selected.value))}
            />
        </div>
      </div> 
      <div className="flex justify-center items-center mb-1">
        <div className='mr-1'>Segunda opção:</div>
        <Select 
          className="p-1"
          instanceId="second-choice-type"
          placeholder="Escolha um tipo"
          options={secondChoiceTypeOptions} 
          onChange={(selected) => setSecondChoiceType(selected?.value)} /> 
        {
          secondChoiceType === 'power' && (
            <Select options={powerOptions}
              instanceId='versatile-second-choice-power'
              onChange={(selected) => selected && versatile.selectSecondChoice(new VersatileChoicePower(GeneralPowerFactory.make({ name: selected.value })))}
            />
          )
        }

        {
          secondChoiceType === 'skill' && (
            <Select options={skillOptions}
              instanceId='versatile-second-choice-skill'
              onChange={(selected) => selected && versatile.selectSecondChoice(new VersatileChoiceSkill(selected.value))}
            />
          )
        }
      </div>
    </div>
  )
}

export default HumanRaceStepVersatileView