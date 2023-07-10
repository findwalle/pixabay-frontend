import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageContainer from './containers/ImageContainer';


function App() {
  // storage for current search images
  const [images, setImages] = useState([]);

  // TODO: wrap in queryclient for cached fetch

  return (
    <div>
      <SearchBar setImages={setImages}/>
      <ImageContainer images={images}/>
    </div>
  );
}

export default App;