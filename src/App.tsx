import React, {useState} from 'react';
import Search from './Search';
import ImageDisplay from "./ImageDisplay";
import {Image} from "./Image";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function App() {
    const [images, setImages] = useState(new Array<Image>())

    return (
        <div className="App">
            <Search setImages={setImages}/>
            <ContentContainer>
                {
                    images.length > 0 ?
                        images.map(image => <ImageDisplay key={image.url} image={image}/>)
                        : <text>No images yet ):</text>
                }
            </ContentContainer>
        </div>
    );
}

export default App;
