import { useState } from "react"

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const setOpen = () => {
    setIsOpen(true)
  }

  const setClose = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    setOpen,
    setClose,
  }
}

export default useModal;
