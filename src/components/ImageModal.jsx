function ImageModal({ isOpen, setClose, details }) {
  if (!isOpen) {
    return null
  }
  
  // TODO: address userImageURL not loading

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <button className="h-500 w-500" onClick={setClose}>X</button>
      <img src={details.userImageURL} alt="user profile picture" />
      <h1 className="text-white">User: {details.user}</h1>
      <img src={details.webformatURL}></img>
      <p>{details.tags}</p>
    </div>
  )
}

export default ImageModal;