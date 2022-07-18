import React, { useState, useRef } from 'react'

export const Input = () => {
  // implies a type of string
  const [name, setName] = useState("")

  // read only ref
  const ref = useRef<HTMLInputElement>(null);

  // declares null is okay
  // const ref = useRef<HTMLInputElement | null>(null)

  // checks for nullish before assessing value (since ref will always have current, is a window/global object), better than if (ref && ref.current) {...}
    console.log("ref", ref.current?.value);


  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
  )
}
 