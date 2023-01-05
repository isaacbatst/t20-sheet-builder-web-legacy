import React from 'react'
import ChooseRaceStep from './ChooseRaceStep/ChooseRaceStep'
import ChooseRoleStep from './ChooseRoleStep/ChooseRoleStep'
import InitialAttributesDefinitionStep from './InitialAttributesDefinitionStep/InitialAttributesDefinitionStep'
import { SheetBuilderSectionContextProvider } from './SheetBuilderSectionContext'

const SheetBuilderSection: React.FC = () => {
  return (
    <SheetBuilderSectionContextProvider>
      <div>
        <h1>Sheet Builder</h1>
        <InitialAttributesDefinitionStep />
        <ChooseRaceStep />
        <ChooseRoleStep />
      </div>
    </SheetBuilderSectionContextProvider>
  )
}

export default SheetBuilderSection