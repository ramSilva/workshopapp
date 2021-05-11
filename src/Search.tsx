import React, {Dispatch, SetStateAction, useState} from "react";
import {searchImages} from "./HttpClient";
import {Image} from "./Image";

interface SearchProps {
    setImages: Dispatch<SetStateAction<Image[]>>
}

const Search: React.FC<SearchProps> = ({setImages}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        searchImages(searchTerm)
            .then(response => response.json())
            .then(json => {
                console.log(json)

                const images = json.results.map((result: any) => {
                    const image: Image = {
                        name: result.alt_description,
                        url: result.urls.small
                    }

                    return image
                })

                setImages(images)
            })

        console.log(searchTerm)
        setSearchTerm('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Search here</label>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={e => {
                        setSearchTerm(e.target.value)
                    }}
                />
            </div>
            <input type='submit' value='Search'/>
        </form>
    )
}

export default Search;