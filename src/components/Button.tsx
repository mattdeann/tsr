import React from 'react'

type Props = {

  // onChange?: (e: React.FormEvent<HTMLInputElement>) => void; // Basic text onChange
  // onClick: (e: React.MouseEvent) => void // Basic Mouse Event
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Mouse event that must be using onClick within a button

}


export const Button: React.FC<React.PropsWithChildren<Props>> = ({onClick, children}) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
