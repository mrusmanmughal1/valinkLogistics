import React from 'react'

const Button = ({children , style}) => {
  return (
    <button className={`  px-4 py-2 bg-green-400 rounded-md`}>{children}</button>
  )
}

export default Button