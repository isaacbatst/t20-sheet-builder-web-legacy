import React, { useContext } from 'react'
import { Attribute } from 't20-sheet-builder'
import { SheetBuilderSectionContext } from '../SheetBuilderSectionContext'
import AttributeInput from './AttributeInput'

const BuyingSystemSection: React.FC = () => {
  const { attributesLauncher, setAttributesLauncher } = useContext(SheetBuilderSectionContext)

  return (
    <div className='mb-5'>
      <h3 className='mb-3'>Compra de pontos</h3>
      <div>Restante: {attributesLauncher.getPoints()}</div>
      <div className="flex justify-evenly mb-3">
        {Object.entries(attributesLauncher.attributes).map(([key, value]) => {
          const attribute = key as Attribute;
          return (
            <AttributeInput 
              key={attribute} 
              attribute={attribute as Attribute} 
              value={value} 
              setValue={(newValue) => setAttributesLauncher(draft => draft.setAttribute(attribute, newValue))}
              decrement={() => setAttributesLauncher(draft => draft.decrement(attribute))} 
              increment={() => setAttributesLauncher(draft => draft.increment(attribute))} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default BuyingSystemSection