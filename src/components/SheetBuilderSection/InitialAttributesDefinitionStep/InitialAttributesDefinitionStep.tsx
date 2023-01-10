import React, { useContext } from 'react'
import Button from '../../common/Button/Button'
import { SheetBuilderSectionContext } from '../SheetBuilderSectionContext'
import BuyingSystem from './BuyingSystem'


const InitialAttributesDefinitionStep: React.FC = () => {
  const { sheetBuilderSteps } = useContext(SheetBuilderSectionContext)

  return (
    <div className='mb-6'>
      <h2 className='mb-3'>1 - Atributos Iniciais</h2>
      <BuyingSystem />
      <Button onClick={() => sheetBuilderSteps.next()}>
        Confirmar
      </Button>
    </div>
  )
}

export default InitialAttributesDefinitionStep