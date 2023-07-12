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
    <form className="searchbar-form" onSubmit={(e) => handleSubmit(e)}>
      <label className="searchbar-label">Search</label>
      <input 
        className="searchbar-input"
        type="text" 
        name="image-searchbar" 
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button className="searchbar-submit-btn" disabled={searchTerm.length == 0 ? true : false}>
        <img 
          className="search-btn-img"
          src={searchIcon} 
          alt="search-button" 
        />
        {/* <p>ok</p> */}
      </button>
    </form>
  )
}

export default SearchBar;