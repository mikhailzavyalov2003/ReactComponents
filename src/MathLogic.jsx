import React from 'react'

export default function MathLogic(props) {
    console.log(props);
  return (
    <div>{props.a} + {props.b} = {Number(props.a)  + Number(props.b)}</div>
  )
}
