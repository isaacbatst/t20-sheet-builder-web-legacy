import React from 'react';
import { Attribute, Translator } from 't20-sheet-builder';
import Checkbox from '../../../common/Checkbox/Checkbox';
import { useSheetBuilderFormContext } from '../../SheetBuilderFormContext';
import { HumanRaceStepAttributesSelectorInterface } from './HumanRaceStepAttributesSelector';

type Props = {
  selector: HumanRaceStepAttributesSelectorInterface
}

const HumanRaceStepAttributesSelection: React.FC<Props> = ({selector}) => {
  const {sheetBuilderForm} = useSheetBuilderFormContext()
  const attributesLauncher = sheetBuilderForm.getAttributesLauncher()
  const attributes = attributesLauncher.getAttributes()
  
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
            {Translator.getAttributeTranslation(attribute)} 
            ({selector.getDTO().attributes[attribute] ? attributes[attribute] + 1 : attributes[attribute]})
          </Checkbox>
        )
      })}
    </div> 
  </div>
  )
}

export default HumanRaceStepAttributesSelection