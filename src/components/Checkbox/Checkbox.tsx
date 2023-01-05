import React, { PropsWithChildren } from 'react'

type Props = {
  handleChange: () => void
  checked: boolean
}

const Checkbox: React.FC<PropsWithChildren<Props>> = ({ handleChange, checked, children}) => {
  return <label className="px-3 flex items-center">
  <input 
    type="checkbox"
    className='w-4 h-4 mr-2' 
    onChange={handleChange}
    checked={checked} 
  /> {children}
</label>
}

export default Checkbox