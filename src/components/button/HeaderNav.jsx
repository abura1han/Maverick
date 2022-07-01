import React from 'react'

const HeaderNavBtn = ({icon}) => {
  return (
      <button><img src={ icon && icon } alt="" /></button>
  )
}

export default HeaderNavBtn