import Image from "../components/Image";
import Loading from "../components/Loading";

function ImageContainer({images}) {
  
  return (
    <div key='image-container'>
      {
        images.length ? 
        images.map(details => {
          return <Image key={details.id} details={details}/>
        }): 
        <Loading />
      }
    </div>
  )
}

export default ImageContainer;