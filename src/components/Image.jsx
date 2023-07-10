function Image({details}) {
  return (
    <img
      src={details.webformatURL}
      alt={details.alt} />
  )
}

export default Image;