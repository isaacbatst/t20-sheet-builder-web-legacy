import React, { useContext, useState } from 'react';
import { RaceInterface, RaceName } from 't20-sheet-builder';
import { SheetBuilderSectionContext } from '../SheetBuilderSectionContext';
import DwarfRaceStep from './DwarfRaceStep';
import HumanRaceStep from './HumanRaceStep';

export type RaceStepComponent = React.FC<{ chooseRace(race: RaceInterface): void }>

const raceStepComponents: Record<RaceName, RaceStepComponent> = {
  dwarf: DwarfRaceStep,
  human: HumanRaceStep
}

const ChooseRaceStep: React.FC = () => {
  const context = useContext(SheetBuilderSectionContext)
  const [selected, setSelected] = useState<RaceName>(RaceName.human)
  
  const RaceStepComponent = raceStepComponents[selected]
  return (
    <div className='flex flex-col items-center'>
      <h2>2 - Escolha sua raça</h2>
      <select name="race" id="race" value={selected} onChange={(e) => setSelected(e.target.value as RaceName)}>
        <option value="human">Humano</option>
        <option value="dwarf">Anão</option>
      </select>
      <RaceStepComponent chooseRace={(race: RaceInterface) => context.setRace(race)} />
  </div>
  )
}

export default ChooseRaceStep