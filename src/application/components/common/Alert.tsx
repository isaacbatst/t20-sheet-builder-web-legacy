import React, { PropsWithChildren } from 'react'

type Props = {
  ariaLabel?: string
}

const Alert: React.FC<PropsWithChildren<Props>> = ({ children, ariaLabel }) => {
  return (
    <div className="px-6 py-2 mb-2 text-xs text-yellow-700 bg-yellow-100 rounded-xl" role="alert" aria-label={ariaLabel}>
      {children}
    </div>
  )
}

export default Alert