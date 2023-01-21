import React from 'react'
import { Attribute, Translator } from 't20-sheet-builder'

type Props = {
  attribute: Attribute,
  value: number, 
  increment: () => void
  decrement: () => void
}

const AttributeInput: React.FC<Props> = ({ attribute, value, decrement, increment }) => {
  const attributeTranslation = Translator.getAttributeTranslation(attribute);
  const inputId = `${attribute}-input`;
  return (
    <div className='flex flex-col items-center'>
      <label htmlFor={inputId}>{attributeTranslation}</label>
      <div className='flex shadow-md rounded-l-full rounded-r-full'>
        <button 
          onClick={decrement} 
          className='px-3 py-2 font-extralight text-2xl hover:bg-slate-50 active:bg-slate-100 rounded-l-full'
          aria-label={`Vender 1 ponto de ${attributeTranslation}`}
          aria-controls={inputId}
        >
          -
        </button>
        <input 
          className='w-8 text-center text-sm bg-white' 
          disabled type="number" id={inputId} value={value} 
          min={-1}
          max={4}
        />
        <button 
          onClick={increment} 
          className='px-3 py-2 font-extralight text-2xl  hover:bg-slate-50 active:bg-slate-100 rounded-r-full' 
          aria-label={`Comprar 1 ponto de ${attributeTranslation}`}
          aria-controls={inputId}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default AttributeInput