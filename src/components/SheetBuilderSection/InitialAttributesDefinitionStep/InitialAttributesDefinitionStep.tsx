import React from 'react'
import Button from '../../common/Button/Button'
import { useSheetBuilderFormContext } from '../SheetBuilderFormContext'
import BuyingSystem from './AttributesLauncherPerPurchaseView'


const InitialAttributesDefinitionStep: React.FC = () => {
  const { sheetBuilderForm } = useSheetBuilderFormContext();

  return (
    <div className='mb-6'>
      <h2 className='mb-3'>1 - Atributos Iniciais</h2>
      <BuyingSystem />
      <Button onClick={() => sheetBuilderForm.confirmInitialAttributes()}>
        Confirmar
      </Button>
    </div>
  )
}

export default InitialAttributesDefinitionStep