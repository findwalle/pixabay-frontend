import Image from "../components/Image";

function ImageContainer({images}) {
  
  return (
    <div key='image-container' className="grid grid-cols-5 place-items-center h-4/5">
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