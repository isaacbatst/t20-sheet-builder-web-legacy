import React from 'react';
import Select from 'react-select';
import { RaceName, Translator } from 't20-sheet-builder';
import { Option } from '../../../../domain/entities/Option';
import Button from '../../common/Button/Button';
import { useSheetBuilderFormContext } from '../SheetBuilderFormContext';
import { RaceStepComponentHuman } from './RaceStepComponentHuman';

const options: Option<RaceName>[] = Object.values(RaceName)
  .map(race => ({ label: Translator.getRaceTranslation(race), value: race }))

const raceComponent = new RaceStepComponentHuman();

const ChooseRaceStepView: React.FC = () => {
  const {sheetBuilderForm} = useSheetBuilderFormContext();
  const chooseRaceStep = sheetBuilderForm.getChooseRaceStep()
  const raceStep = chooseRaceStep.getRaceStep();

  return (
    <div className='flex flex-col items-center mb-6'>
      <div className="flex justify-center items-center mb-3">
        <h2 className='mr-2'>2 - Escolha sua raça</h2>
        <Select 
          options={options} 
          placeholder="Raça"
          value={raceStep && { label: Translator.getRaceTranslation(raceStep.raceName), value: raceStep.raceName }}
          onChange={(selected) => selected && chooseRaceStep.selectRace(chooseRaceStep.makeRaceStep(selected.value))} 
          instanceId='choose-race'
        />
      </div>
      {raceStep && raceComponent.render(raceStep)}
    </div>
  )
}

export default ChooseRaceStepView