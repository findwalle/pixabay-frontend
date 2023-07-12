import { useState } from 'react';
import { default as axios } from 'axios';
import searchIcon from '../assets/search-icon.png'

const pixabayAPI = import.meta.env.VITE_PIXABAY_KEY

function SearchBar({setImages}) {
  const [searchTerm, setSearchTerm] = useState('')

  // setup react-query for cached fetch
  const handleSubmit = async (e) => {
    // search via searchTerm state
    e.preventDefault()
    const result = await axios.get(`https://pixabay.com/api/?key=${pixabayAPI}&q=${encodeURIComponent(searchTerm)}&image_type=photo`)
    setImages(result.data.hits)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input 
        type="text" 
        name="image-searchbar" 
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button disabled={searchTerm.length == 0 ? true : false}>
        <img 
          className="w-7 h-7"
          src={searchIcon} 
          alt="search-button" 
        />
      </button>
    </form>
  )
}

export default SearchBar;