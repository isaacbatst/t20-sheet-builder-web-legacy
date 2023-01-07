import React, { PropsWithChildren } from 'react'

const Alert: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="px-6 py-2 mb-2 text-xs text-yellow-700 bg-yellow-100 rounded-xl" role="alert">
      {children}
    </div>
  )
}

export default Alert