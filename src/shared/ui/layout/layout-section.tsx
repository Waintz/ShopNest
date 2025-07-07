import React from 'react'

export function LayoutSection({children}: {
    children?: React.ReactNode;
}) {
  return (
    <div className='bg-white py-7 px-8'>
        {children}
    </div>
  )
}
