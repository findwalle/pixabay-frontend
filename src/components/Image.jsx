import useModal from "../shared/hooks/useModal"
import ImageModal from "./ImageModal"

function Image({details}) {
  const { isOpen, setOpen, setClose } = useModal();

  return (
    <button onClick={setOpen}>
      {isOpen ? <ImageModal isOpen={isOpen} setClose={setClose} details={details}/> : null}
      <img
        src={details.webformatURL}
        alt={details.alt} 
      />
    </button>
  )
}

export default Image;