import React from 'react'
import ChooseRaceStepView from './ChooseRaceStep/ChooseRaceStepView'
import ChooseRoleStep from './ChooseRoleStep/ChooseRoleStep'
import InitialAttributesDefinitionStep from './InitialAttributesDefinitionStep/InitialAttributesDefinitionStep'
import { SheetBuilderSectionContextProvider } from './SheetBuilderSectionContext'

const SheetBuilderSection: React.FC = () => {
  return (
    <SheetBuilderSectionContextProvider>
      <div className='container mx-auto'>
        <h1>Sheet Builder</h1>
        <InitialAttributesDefinitionStep />
        <ChooseRaceStepView />
        <ChooseRoleStep />
      </div>
    </SheetBuilderSectionContextProvider>
  )
}

export default SheetBuilderSection