import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  onClick: Function,
}>

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button 
    className='shadow-lg px-8 py-3 rounded-full hover:bg-slate-50 active:bg-slate-100'
    onClick={() => onClick()}>
      {children}
    </button>  )
}

export default Button