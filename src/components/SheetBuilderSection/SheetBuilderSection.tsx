import React, { useContext } from 'react'
import { SheetBuilderSectionContext, SheetBuilderSectionContextProvider } from './SheetBuilderSectionContext'

const SheetBuilderSection: React.FC = () => {
  const { sheetBuilderSteps } = useContext(SheetBuilderSectionContext)

  return (
    <div className='container mx-auto'>
      <h1>Sheet Builder</h1>
      {sheetBuilderSteps.getCurrent().getComponent()}
    </div>
  )
}

export default SheetBuilderSection