import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  onClick: Function,
  disabled?: boolean
}>

const Button: React.FC<Props> = ({ onClick, children, disabled }) => {
  return (
    <button 
    disabled={disabled}
    className='shadow-lg px-8 py-3 cursor-pointer rounded-full hover:bg-slate-50 active:bg-slate-100'
    onClick={() => onClick()}>
      {children}
    </button>  )
}

export default Button