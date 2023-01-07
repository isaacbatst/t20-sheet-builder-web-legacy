import React from 'react'
import { useContext } from 'react'
import { SheetBuilderSectionContext } from '../SheetBuilderSectionContext'
import BuyingSystem from './BuyingSystem'


const InitialAttributesDefinitionStep: React.FC = () => {
  const context = useContext(SheetBuilderSectionContext)

  return (
    <div className='mb-6'>
      <h2 className='mb-3'>1 - Atributos Iniciais</h2>
      <BuyingSystem />
    </div>
  )
}

export default InitialAttributesDefinitionStep