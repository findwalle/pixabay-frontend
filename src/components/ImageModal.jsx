function ImageModal({ isOpen, setClose, details }) {
  if (!isOpen) {
    return null
  }
  
  // TODO: address userImageURL not loading

  return (
    <div className="image-modal">
      <button onClick={setClose}>X</button>
      <img src={details.userImageURL} alt="user profile picture" />
      <h1 className="">{details.user}</h1>
      <img src={details.webformatURL}></img>
      <p>{details.tags}</p>
    </div>
  )
}

export default ImageModal;