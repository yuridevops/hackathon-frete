import { useEffect, useCallback, RefObject } from 'react'

export function useOutsideClick(
  ref: RefObject<HTMLElement>,
  callback: () => void
) {
  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick, false)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handleOutsideClick])
}
