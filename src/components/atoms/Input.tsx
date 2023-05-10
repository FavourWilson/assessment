import React from 'react'

const Input = (onChange:any,className:any,type:any,placeHolder:any) => {
  return (
    <input type={type} placeholder={placeHolder} onChange={onChange} className={`${className} border-2 outline-none border-slate-700-`}/>
  )
}

export default Input