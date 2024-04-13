import React from 'react'

const Hoc = (Component: any) => {
  function Hoc() {
    return (
      <div className='sm:mx-16 lg:mx-24'>
        <Component/>
      </div>
    )
  }
  return Hoc
}

export default Hoc