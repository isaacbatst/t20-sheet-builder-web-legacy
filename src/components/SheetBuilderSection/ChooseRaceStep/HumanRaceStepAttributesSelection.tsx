import React, { useContext } from 'react';
import { Attribute, Translator } from 't20-sheet-builder';
import { SheetBuilderSectionContext } from '../SheetBuilderSectionContext';
import { HumanRaceStepAttributesSelector } from './HumanRaceStepAttributesSelector';

type Props = {
  handleChange(attribute: Attribute): void
  selector: HumanRaceStepAttributesSelector
}

const HumanRaceStepAttributesSelection: React.FC<Props> = ({handleChange, selector}) => {
  const context= useContext(SheetBuilderSectionContext)
  
  return (
    <div>
    <div className='mb-4'>Escolha 3 atributos para receber +1:</div>
    <div className='flex mb-3'>
      {Object.entries(selector.attributes).map(([key, value]) => {
        const attribute = key as Attribute;
        return (
          <label key={key} className="px-3 flex items-center">
            <input 
              type="checkbox"
              className='w-4 h-4 mr-2' 
              onChange={() => handleChange(attribute)}
              checked={value} 
            /> {Translator.getAttributeTranslation(attribute)} ({selector.getPreview(attribute, context.attributesLauncher.attributes)})
          </label>
        )
      })}
    </div> 
  </div>
  )
}

export default HumanRaceStepAttributesSelection