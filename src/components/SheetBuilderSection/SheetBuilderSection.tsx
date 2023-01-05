import React from 'react'
import ChooseRaceStep from './ChooseRaceStep/ChooseRaceStep'
import InitialAttributesDefinitionStep from './InitialAttributesDefinitionStep/InitialAttributesDefinitionStep'
import { SheetBuilderSectionContextProvider } from './SheetBuilderSectionContext'

const SheetBuilderSection: React.FC = () => {
  return (
    <SheetBuilderSectionContextProvider>
      <div>
        <h1>Sheet Builder</h1>
        <InitialAttributesDefinitionStep />
        <ChooseRaceStep />
      </div>
    </SheetBuilderSectionContextProvider>
  )
}

export default SheetBuilderSection