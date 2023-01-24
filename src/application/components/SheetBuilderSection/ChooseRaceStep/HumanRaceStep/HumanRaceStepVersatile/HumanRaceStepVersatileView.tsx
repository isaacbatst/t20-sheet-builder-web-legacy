import React, { useState } from 'react';
import Select from 'react-select';
import { GeneralPowerFactory, GeneralPowerName, SkillName, Translator, VersatileChoicePower, VersatileChoiceSkill, VersatileChoiceType } from 't20-sheet-builder';
import { CommonErrors } from '../../../../../../domain/entities/CommonErrors';
import { Option } from '../../../../../../domain/entities/Option';
import Alert from '../../../../common/Alert';
import { HumanRaceStepVersatileErrors } from './HumanRaceStepVersatile';
import { HumanRaceStepVersatileProjectionDecorator } from './HumanRaceStepVersatileProjectionDecorator';

type Props = {
  versatile: HumanRaceStepVersatileProjectionDecorator
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

const errorTranslations: Record<HumanRaceStepVersatileErrors | CommonErrors, string> = {
  EQUAL_CHOICES: 'As escolhas devem ser diferentes',
  UNKNOWN_ERROR: 'Erro desconhecido'
}

const HumanRaceStepVersatileView: React.FC<Props> = ({ versatile }) => {
  const [secondChoiceType, setSecondChoiceType] = useState<VersatileChoiceType>();
  const error = versatile.getError();
  const errorTranslation = error && errorTranslations[error]
  return (
    <div>
      <h3 className='mb-2'>Versátil</h3 >
      {error && <Alert ariaLabel='Erro em Versátil'>{errorTranslation}</Alert>}
      <div className='flex justify-center items-center mb-1'>
        <div className="flex justify-center items-center mb-1">
          <div className='mr-1'>Primeira escolha: </div>
          <Select options={skillOptions}
              instanceId='versatile-first-choice'
              aria-label='Primeira escolha (perícia)'
              placeholder='Escolha uma perícia'
              onChange={(selected) => selected && versatile.selectFirstChoice(new VersatileChoiceSkill(selected.value))}
            />
        </div>
      </div> 
      <div className="flex justify-center items-center mb-1">
        <div className='mr-1'>Segunda escolha:</div>
        <Select 
          className="p-1"
          instanceId="second-choice-type"
          placeholder="Escolha um tipo"
          aria-label='Tipo da segunda escolha'
          options={secondChoiceTypeOptions} 
          onChange={(selected) => setSecondChoiceType(selected?.value)} /> 
        {
          secondChoiceType === 'power' && (
            <Select options={powerOptions}
              instanceId='versatile-second-choice-power'
              aria-label='Segunda escolha (poder)'
              placeholder='Escolha um poder'
              onChange={(selected) => selected && versatile.selectSecondChoice(new VersatileChoicePower(GeneralPowerFactory.make({ name: selected.value })))}
            />
          )
        }

        {
          secondChoiceType === 'skill' && (
            <Select options={skillOptions}
              instanceId='versatile-second-choice-skill'
              aria-label='Segunda escolha (perícia)'
              placeholder='Escolha uma perícia'
              onChange={(selected) => selected && versatile.selectSecondChoice(new VersatileChoiceSkill(selected.value))}
            />
          )
        }
      </div>
    </div>
  )
}

export default HumanRaceStepVersatileView