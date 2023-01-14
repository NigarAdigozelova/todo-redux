import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Child = () => {
    const counter=useSelector(state=>state)
    const dispatch=useDispatch()
  return (
    <>
<div>{counter}</div>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
    </>
  )
}

export default Child
