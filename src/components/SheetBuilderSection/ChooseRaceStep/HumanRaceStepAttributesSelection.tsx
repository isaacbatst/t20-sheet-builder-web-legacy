import React, { useContext } from 'react';
import { Attribute, Translator } from 't20-sheet-builder';
import Checkbox from '../../Checkbox/Checkbox';
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
          <Checkbox 
            key={key} handleChange={() => handleChange(attribute)}               
            checked={value} 
          > {Translator.getAttributeTranslation(attribute)} ({selector.getPreview(attribute, context.attributesLauncher.attributes)})
          </Checkbox>
        )
      })}
    </div> 
  </div>
  )
}

export default HumanRaceStepAttributesSelection