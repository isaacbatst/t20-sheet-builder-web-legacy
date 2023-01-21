import React from 'react'
import Button from '../../common/Button/Button'
import { useSheetBuilderFormContext } from '../SheetBuilderFormContext'
import AttributesLauncherPerPurchaseView from './AttributesLauncherPerPurchaseView'


const InitialAttributesDefinitionStep: React.FC = () => {
  const { sheetBuilderForm } = useSheetBuilderFormContext();

  return (
    <div className='mb-6'>
      <h2 className='mb-3'>1 - Atributos Iniciais</h2>
      <AttributesLauncherPerPurchaseView  attributesLauncher={sheetBuilderForm.getAttributesLauncher()} />
      <Button onClick={() => sheetBuilderForm.confirmInitialAttributes()}>
        Confirmar
      </Button>
    </div>
  )
}

export default InitialAttributesDefinitionStep