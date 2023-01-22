import React, { PropsWithChildren } from 'react'

type Props = {
  handleChange: () => void
  checked: boolean,
  id: string
}

const Checkbox: React.FC<PropsWithChildren<Props>> = ({ handleChange, checked, children, id}) => {
  return (
    <label className="px-3 flex items-center" htmlFor={id}>
      <input 
        type="checkbox"
        className='w-4 h-4 mr-2' 
        onChange={handleChange}
        checked={checked} 
        id={id}
      /> 
      {children}
    </label>
  )
}

export default Checkbox