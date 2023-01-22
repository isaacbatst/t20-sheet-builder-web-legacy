import React from 'react'
import Button from '../common/Button/Button'
import { useSheetBuilderFormContext } from './SheetBuilderFormContext'

const SheetBuilderStepsView: React.FC = () => {
  const {sheetBuilderForm} = useSheetBuilderFormContext()
  const sheetBuilderSteps = sheetBuilderForm.getSheetBuilderSteps();
  const currentStep = sheetBuilderSteps.getCurrent()
  return (
    <>
      {currentStep.getComponent()}
      {sheetBuilderSteps.shouldShowPrevious() 
        && <Button onClick={() => sheetBuilderForm.previous()} >Voltar</Button>}
      <Button 
        onClick={() => sheetBuilderForm.confirmStep(() => currentStep.validate())}
      >Confirmar
      </Button>
    </>
  )
}

export default SheetBuilderStepsView