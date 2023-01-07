import React, { useEffect } from 'react'
import { Dwarf } from 't20-sheet-builder'
import Button from '../../Button/Button'

type Props = {
  chooseRace(dwarf: Dwarf): void
}

const DwarfRaceStep: React.FC<Props> = ({ chooseRace }) => {
  return (
    <div>
      <Button onClick={() => {
          chooseRace(new Dwarf())
      }}>Confirmar Raça</Button>
    </div>
  )
}

export default DwarfRaceStep