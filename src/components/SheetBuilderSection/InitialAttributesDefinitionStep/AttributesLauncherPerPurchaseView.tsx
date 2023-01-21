import React from 'react'
import { Attribute } from 't20-sheet-builder'
import { useSheetBuilderFormContext } from '../SheetBuilderFormContext'
import AttributeInput from './AttributeInput'

const AttributesLauncherPerPurchaseView: React.FC = () => {
  const {sheetBuilderForm} = useSheetBuilderFormContext()
  const attributesLauncher = sheetBuilderForm.getAttributesLauncher()
  const attributes = attributesLauncher.getAttributes();
  return (
    <div>
      <h3 className='mb-3'>Compra de pontos</h3>
      <div>Restante: {attributesLauncher.getPoints()}</div>
      <div className="flex justify-evenly mb-3">
        {Object.entries(attributes).map(([key, value]) => {
          const attribute = key as Attribute;
          return (
            <AttributeInput 
              key={attribute} 
              attribute={attribute} 
              value={value} 
              decrement={() => attributesLauncher.sell(attribute)} 
              increment={() => attributesLauncher.buy(attribute)} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default AttributesLauncherPerPurchaseView