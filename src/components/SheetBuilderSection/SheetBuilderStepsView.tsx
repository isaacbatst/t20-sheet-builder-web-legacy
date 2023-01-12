import React from 'react'
import Button from '../common/Button/Button'
import { useSheetBuilderFormContext } from './SheetBuilderFormContext'

const SheetBuilderStepsView: React.FC = () => {
  const {sheetBuilderForm} = useSheetBuilderFormContext()
  const sheetBuilderSteps = sheetBuilderForm.getSheetBuilderSteps()
  return (
    <>
      {sheetBuilderSteps.getCurrent().getComponent()}
      {sheetBuilderSteps.shouldShowPrevious() 
        && <Button onClick={() => sheetBuilderForm.previous()} >Voltar</Button>}
    </>
  )
}

export default SheetBuilderStepsView