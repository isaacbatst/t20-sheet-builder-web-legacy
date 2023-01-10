import React, { useContext } from 'react'
import Alert from '../common/Alert'
import { SheetBuilderSectionContext } from './SheetBuilderSectionContext'

const SheetBuilderSection: React.FC = () => {
  const { sheetBuilderSteps, error } = useContext(SheetBuilderSectionContext)

  return (
    <div className='container mx-auto'>
      <h1>Sheet Builder</h1>
      {error && <Alert>{error}</Alert>}
      {sheetBuilderSteps.getCurrent().getComponent()}
    </div>
  )
}

export default SheetBuilderSection