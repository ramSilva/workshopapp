import React, {Dispatch, SetStateAction, useState} from "react";
import {searchImages} from "./HttpClient";
import {Image} from "./Image";
import styled from "styled-components";

interface SearchProps {
    setImages: Dispatch<SetStateAction<Image[]>>
}

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface SearchInputProps {
    isPressed: boolean
}

const SearchInput = styled.input`
  background-color: green;
  border-radius: 5px;

  margin-top: 5px;
  border: none;
  padding: 10px;

  &:hover {
    background-color: red;
  }

  box-shadow: ${(props: SearchInputProps) => {
    if (props.isPressed) {
      return '1px 1px 1px 1px #000000';
    } else {
      return '1px 1px 2px 2px #000000';
    }
  }};
`

const Search: React.FC<SearchProps> = ({setImages}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isPressingButton, setIsPressingButton] = useState(false)

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
        <FormComponent onSubmit={handleSubmit}>
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
            <SearchInput
                isPressed={isPressingButton}
                onMouseDown={_ => setIsPressingButton(true)}
                onMouseUp={_ => setIsPressingButton(false)}
                onMouseLeave={_ => setIsPressingButton(false)}
                type='submit'
                value='Search'/>
        </FormComponent>
    )
}

export default Search;