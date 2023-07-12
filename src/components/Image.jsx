import useModal from "../shared/hooks/useModal"
import ImageModal from "./ImageModal"

function Image({details}) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="image-frame">
      <button className="image-modal-btn" onClick={openModal}>
        <img
          className="image"
          src={details.webformatURL}
          alt={details.alt} 
          />
      </button>
      {isOpen ? <ImageModal isOpen={isOpen} setClose={closeModal} details={details}/> : null}
    </div>
  )
}

export default Image;