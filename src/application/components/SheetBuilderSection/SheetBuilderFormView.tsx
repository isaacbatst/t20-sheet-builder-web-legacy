import React from 'react'
import Alert from '../common/Alert'
import { useSheetBuilderFormContext } from './SheetBuilderFormContext'
import SheetBuilderStepsView from './SheetBuilderStepsView'

const SheetBuilderFormView: React.FC = () => {
  const {sheetBuilderForm} = useSheetBuilderFormContext();
  const error = sheetBuilderForm.getError();
  
  return (
    <div className='container mx-auto'>
      <h1>Sheet Builder</h1>
      {error && <Alert>{error}</Alert>}
      <SheetBuilderStepsView />
    </div>
  )
}

export default SheetBuilderFormView