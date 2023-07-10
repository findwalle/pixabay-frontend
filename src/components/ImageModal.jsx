function ImageModal({ isOpen, setClose, details }) {
  if (!isOpen) {
    return null
  }
  console.log(details)
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={setClose}> X </div>
      <img src={details.userImageURL} alt="user profile picture" />
      <h1 className="text-white">User: {details.user}</h1>
      <img src={details.webformatURL}></img>
      <p>{details.tags}</p>
    </div>
  )
}

export default ImageModal;