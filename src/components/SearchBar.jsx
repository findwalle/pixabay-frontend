import { useRef } from 'react';
import { default as axios } from 'axios';
import searchIcon from '../assets/search-icon.png'

const pixabayAPI = import.meta.env.VITE_PIXABAY_KEY

function SearchBar({setImages}) {
  const searchTerm = useRef('');

  // setup react-query for cached fetch
  const handleSubmit = async (e) => {
    // search via searchTerm ref
    e.preventDefault()
    const result = await axios.get(`https://pixabay.com/api/?key=${pixabayAPI}&q=${encodeURIComponent(searchTerm.current)}&image_type=photo`)
    setImages(result.data.hits)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input 
        type="text" 
        name="image-searchbar" 
        placeholder="Search..."
        onChange={(e) => searchTerm.current = e.target.value}
      />
      <button className="p-5">
        <img src={searchIcon} alt="search-button" />
      </button>
    </form>
  )
}

export default SearchBar;