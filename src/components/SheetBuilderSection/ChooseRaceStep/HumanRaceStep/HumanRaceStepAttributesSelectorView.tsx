import React from 'react';
import { Attribute, Translator } from 't20-sheet-builder';
import Checkbox from '../../../common/Checkbox/Checkbox';
import { AttributesLauncherPerPurchaseInterface } from '../../InitialAttributesDefinitionStep/AttributesLauncherPerPurchase';
import { HumanRaceStepAttributesSelectorInterface } from './HumanRaceStepAttributesSelector';

type Props = {
  selector: HumanRaceStepAttributesSelectorInterface,
  attributesLauncher: AttributesLauncherPerPurchaseInterface
}

const HumanRaceStepAttributesSelectorView: React.FC<Props> = ({selector, attributesLauncher}) => {
  const initialAttributes = attributesLauncher.getAttributes()
  const selectorAttributes = selector.getAttributes()
  return (
    <div>
    <h3 className='mb-2'>Escolha 3 atributos para receber +1:</h3>
    <div className='flex mb-3'>
      {Object.entries(selectorAttributes).map(([key, value]) => {
        const attribute = key as Attribute;
        const attributeTranslation = Translator.getAttributeTranslation(attribute);
        const attributePreview = selector.getPreview(attribute, initialAttributes) 
        return (
          <Checkbox 
            key={key} handleChange={() => selector.toggleAttribute(attribute)}               
            checked={value}
            id={`${attribute}-human-checkbox`} 
          > 
            {attributeTranslation} ({attributePreview})
          </Checkbox>
        )
      })}
    </div> 
  </div>
  )
}

export default HumanRaceStepAttributesSelectorView