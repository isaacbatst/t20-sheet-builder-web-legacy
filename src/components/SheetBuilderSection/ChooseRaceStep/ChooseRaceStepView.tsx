import React, { useContext } from 'react';
import Select from 'react-select';
import { RaceName, Translator } from 't20-sheet-builder';
import { Option } from '../../../domain/entities/Option';
import Button from '../../common/Button/Button';
import { SheetBuilderSectionContext } from '../SheetBuilderSectionContext';
import { RaceStepComponentHuman } from './RaceStepComponentHuman';

const options: Option<RaceName>[] = Object.values(RaceName)
  .map(race => ({ label: Translator.getRaceTranslation(race), value: race }))

const raceComponent = new RaceStepComponentHuman();

const ChooseRaceStepView: React.FC = () => {
  const context = useContext(SheetBuilderSectionContext);
  const selectedRace = context.chooseRaceStep.getRace();

  return (
    <div className='flex flex-col items-center mb-6'>
      <div className="flex justify-center items-center mb-3">
        <h2 className='mr-2'>2 - Escolha sua raça</h2>
        <Select 
          options={options} 
          placeholder="Raça"
          value={selectedRace && { label: Translator.getRaceTranslation(selectedRace.raceName), value: selectedRace.raceName }}
          onChange={(selected) => selected && context.chooseRaceStep.selectRace(selected.value)} 
          instanceId='choose-race'
        />
      </div>
      {selectedRace && raceComponent.render(context.chooseRaceStep)}
      <Button disabled={!selectedRace} onClick={() => context.confirmRace(selectedRace)}>
        Confirmar Raça
      </Button>
  </div>
  )
}

export default ChooseRaceStepView