import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageContainer from './containers/ImageContainer';


function App() {
  // storage for current search images
  const [images, setImages] = useState([]);

  // TODO: wrap in queryclient for cached fetch

  return (
    <div id="app">
      <SearchBar setImages={setImages}/>
      {images.length ? <ImageContainer images={images}/> : null}
    </div>
  );
}

export default App;