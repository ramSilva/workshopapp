import React, {useState} from 'react';
import Search from './Search';
import ImageDisplay from "./ImageDisplay";
import {Image} from "./Image";

function App() {
    const [images, setImages] = useState(new Array<Image>())

    return (
        <div className="App">
            <Search setImages={setImages}/>
            {
                images.length > 0 ?
                    images.map(image => <ImageDisplay key={image.url} image={image}/>)
                    : <text>No images yet ):</text>
            }
        </div>
    );
}

export default App;
