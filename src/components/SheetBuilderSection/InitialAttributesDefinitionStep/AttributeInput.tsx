import React from 'react'
import { Attribute, Translator } from 't20-sheet-builder'

type Props = {
  attribute: Attribute,
  value: number, 
  setValue: (value: number) => void
  increment: () => void
  decrement: () => void
}

const AttributeInput: React.FC<Props> = ({ attribute, setValue, value, decrement, increment }) => {
  return (
    <div className='flex flex-col items-center'>
      <label htmlFor={attribute}>{Translator.getAttributeTranslation(attribute)}</label>
      <div className='flex shadow-md rounded-l-full rounded-r-full'>
        <button onClick={decrement} className='px-3 py-2 font-extralight text-2xl hover:bg-slate-50 active:bg-slate-100 rounded-l-full'>-</button>
        <input className='w-8 text-center text-sm bg-white' disabled type="number" id={attribute} value={value} onChange={(e) => setValue(Number(e.target.value))} />
        <button onClick={increment} className='px-3 py-2 font-extralight text-2xl  hover:bg-slate-50 active:bg-slate-100 rounded-r-full' >+</button>
      </div>
    </div>
  )
}

export default AttributeInput