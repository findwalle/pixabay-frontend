import Image from "../components/Image";

function ImageContainer({images}) {
  
  return (
    <div key='image-container'>
      {
        images.length ? 
        images.map(details => {
          return <Image key={details.id} details={details}/>
        }): 
        null
      }
    </div>
  )
}

export default ImageContainer;