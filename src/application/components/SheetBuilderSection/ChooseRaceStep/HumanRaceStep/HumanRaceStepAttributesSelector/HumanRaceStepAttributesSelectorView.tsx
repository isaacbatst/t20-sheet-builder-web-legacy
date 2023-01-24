import React from 'react';
import { Attribute, Attributes, Translator } from 't20-sheet-builder';
import Checkbox from '../../../../common/Checkbox/Checkbox';
import { HumanRaceStepAttributesSelectorProjectionDecorator } from './HumanRaceStepAttributesSelectorProjectionDecorator';

type Props = {
  selector: HumanRaceStepAttributesSelectorProjectionDecorator,
  initialAttributes: Attributes
}

const HumanRaceStepAttributesSelectorView: React.FC<Props> = ({selector, initialAttributes}) => {
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