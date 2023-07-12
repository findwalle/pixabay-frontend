function ImageModal({ isOpen, setClose, details }) {
  if (!isOpen) {
    return null
  }
  // TODO: address userImageURL not loading

  return (
    <div className="image-modal">
      <div className="modal-top-section">
        <img className="modal-user-pfp" src={details.userImageURL} alt="user profile picture" />
        <h1 className="modal-username">{details.user}</h1>
        <button className="modal-close-btn" onClick={setClose}>X</button>
      </div>
      <img className="modal-img" src={details.webformatURL}></img>
      <ul className="modal-tags">
        {details.tags.split(',').map((tag) => {
          return <li>{`#${tag.trim()}`}</li>
        })}
      </ul>
    </div>
  )
}

export default ImageModal;