import React, { useContext } from 'react';
import { Attribute, Translator } from 't20-sheet-builder';
import Checkbox from '../../common/Checkbox/Checkbox';
import { SheetBuilderFormContext } from '../SheetBuilderFormContext';
import { HumanRaceStepAttributesSelectorInterface } from './HumanRaceStepAttributesSelector';

type Props = {
  selector: HumanRaceStepAttributesSelectorInterface
}

const HumanRaceStepAttributesSelection: React.FC<Props> = ({selector}) => {
  const context= useContext(SheetBuilderFormContext)
  
  return (
    <div>
    <h3 className='mb-2'>Escolha 3 atributos para receber +1:</h3>
    <div className='flex mb-3'>
      {Object.entries(selector.getDTO().attributes).map(([key, value]) => {
        const attribute = key as Attribute;
        return (
          <Checkbox 
            key={key} handleChange={() => selector.toggleAttribute(attribute)}               
            checked={value} 
          > 
            {Translator.getAttributeTranslation(attribute)} ({selector.getDTO().attributes[attribute] ? context.attributesLauncher.attributes[attribute] + 1 : context.attributesLauncher.attributes[attribute]})
          </Checkbox>
        )
      })}
    </div> 
  </div>
  )
}

export default HumanRaceStepAttributesSelection