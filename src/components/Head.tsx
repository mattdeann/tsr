import React from 'react'
import {Button} from './Button'

// title
// isActive



// Declaring prop types
type Props = {
  title: string;
  // question mark operator makes it optional, will not throw error when <Head /> is constructed
  isActive?: boolean;
  // the below two are the same thing
  type3?: Array<string> | string[]
}

// nermal stuff, set defaults here in prop deconstruction!
export const Head = ({ title = "Hello Default", isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  )
}