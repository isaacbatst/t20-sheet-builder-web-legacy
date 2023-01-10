import React, { useContext } from 'react'
import Alert from '../common/Alert'
import Button from '../common/Button/Button'
import { SheetBuilderFormContext } from './SheetBuilderFormContext'

const SheetBuilderFormView: React.FC = () => {
  const { sheetBuilderSteps, error } = useContext(SheetBuilderFormContext)

  return (
    <div className='container mx-auto'>
      <h1>Sheet Builder</h1>
      {error && <Alert>{error}</Alert>}
      {sheetBuilderSteps.getCurrent().getComponent()}
      {sheetBuilderSteps.shouldShowPrevious() 
        && <Button onClick={() => sheetBuilderSteps.previous()} >Voltar</Button>}
    </div>
  )
}

export default SheetBuilderFormView