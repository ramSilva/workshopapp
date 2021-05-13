import React from "react";
import {Image} from "./Image";
import styled from "styled-components";

export interface ImageDisplayProps {
    image: Image
}

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ImageComponent = styled.img`
  width: 50px;
`

const ImageDisplay: React.FC<ImageDisplayProps> = ({image}) => {
    return (
        <Container>
            <ImageComponent src={image.url}/>
            <text>{image.name}</text>
        </Container>
    )
};

export default ImageDisplay;