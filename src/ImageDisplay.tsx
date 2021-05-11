import React from "react";
import {Image} from "./Image";

export interface ImageDisplayProps {
    image: Image
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({image}) => {
    return (
        <div>
            <img src={image.url}/>
            <text>{image.name}</text>
        </div>
    )
};

export default ImageDisplay;