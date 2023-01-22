import React from 'react';
import { Attribute, Translator } from 't20-sheet-builder';
import Checkbox from '../../../common/Checkbox/Checkbox';
import { useSheetBuilderFormContext } from '../../SheetBuilderFormContext';
import { HumanRaceStepAttributesSelectorInterface } from './HumanRaceStepAttributesSelector';

type Props = {
  selector: HumanRaceStepAttributesSelectorInterface
}

const HumanRaceStepAttributesSelectorView: React.FC<Props> = ({selector}) => {
  const {sheetBuilderForm} = useSheetBuilderFormContext()
  const attributesLauncher = sheetBuilderForm.getAttributesLauncher()
  const initialAttributes = attributesLauncher.getAttributes()
  const selectorAttributes = selector.getAttributes()
  return (
    <div>
    <h3 className='mb-2'>Escolha 3 atributos para receber +1:</h3>
    <div className='flex mb-3'>
      {Object.entries(selectorAttributes).map(([key, value]) => {
        const attribute = key as Attribute;
        return (
          <Checkbox 
            key={key} handleChange={() => selector.toggleAttribute(attribute)}               
            checked={value} 
          > 
            {Translator.getAttributeTranslation(attribute)} 
            ({selectorAttributes[attribute] ? initialAttributes[attribute] + 1 : initialAttributes[attribute]})
          </Checkbox>
        )
      })}
    </div> 
  </div>
  )
}

export default HumanRaceStepAttributesSelectorView