import React from 'react'
import { AttributesLauncherPerPurchaseInterface } from './AttributesLauncherPerPurchase'
import AttributesLauncherPerPurchaseView from './AttributesLauncherPerPurchaseView'

type Props = {
  attributesLauncherPerPurchase: AttributesLauncherPerPurchaseInterface
}

const InitialAttributesDefinitionStep: React.FC<Props> = ({ attributesLauncherPerPurchase }) => {
  return (
    <div className='mb-6'>
      <h2 className='mb-3'>1 - Atributos Iniciais</h2>
      <AttributesLauncherPerPurchaseView attributesLauncher={attributesLauncherPerPurchase} />
    </div>
  )
}

export default InitialAttributesDefinitionStep