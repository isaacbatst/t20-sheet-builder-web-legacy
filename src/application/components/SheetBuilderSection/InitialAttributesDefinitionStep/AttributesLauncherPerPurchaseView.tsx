import React from 'react'
import { Attribute } from 't20-sheet-builder'
import AttributeInput from './AttributeInput'
import { AttributesLauncherPerPurchaseInterface } from './AttributesLauncherPerPurchase'

type Props = {
  attributesLauncher: AttributesLauncherPerPurchaseInterface
}

const AttributesLauncherPerPurchaseView: React.FC<Props> = ({ attributesLauncher }) => {
  const attributes = attributesLauncher.getAttributes();
  
  return (
    <div>
      <h3 className='mb-3'>Compra de pontos</h3>
      <div role="status" aria-label='Pontos'>Restam {attributesLauncher.getPoints()} pontos</div>
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