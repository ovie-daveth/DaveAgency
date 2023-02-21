import React from 'react'

const Helmet = (props) => {

    document.title = 'DaveAgency - ' + props.title
  return (
    <div className=' w-full'>
      {props.children}
    </div>
  )
}

export default Helmet