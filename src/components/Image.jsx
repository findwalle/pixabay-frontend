import useModal from "../shared/hooks/useModal"
import ImageModal from "./ImageModal"

function Image({details}) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>
        <img
          className="block p-3 max-h-fit"
          src={details.webformatURL}
          alt={details.alt} 
          />
      </button>
      {isOpen ? <ImageModal isOpen={isOpen} setClose={closeModal} details={details}/> : null}
    </div>
  )
}

export default Image;