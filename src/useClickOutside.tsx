import React, { useEffect } from 'react';

// checking for types
//ref must connected to a div
// handler is a function that doesn't return anything
export const useClickOutside = (ref: React.MutableRefObject<HTMLElement>, handler: (event: MouseEvent | TouchEvent) => void) => {
  useEffect(() => {

    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      // otherwise, run handler
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)


    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)

    }
  }, [handler, ref])
}