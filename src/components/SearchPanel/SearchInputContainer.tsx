import Input from '../UI/Input'
import Button from '../UI/Button'

import BooksData from '../../store'

import styled from 'styled-components/macro'

import { observer } from 'mobx-react'
import { searchBooks } from '../../utils/searchBooks'

import { useCallback } from 'react'

const StyledSearchForm = styled.form`
    display: flex;
    @media (max-width: 575px) {
        flex-direction: column;
    }
`

const SearchInputContainer = observer(() => {
    const inputValue = BooksData.defaultSearchValue
    const startSearchIndex = BooksData.startSearchIndex

    const handleChangeInputValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            BooksData.changeSearchValue(e.target.value)
        },
        []
    )

    const handleConfirm = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault()
            searchBooks(inputValue, startSearchIndex)
        },
        [startSearchIndex, inputValue]
    )

    const handleClick = useCallback(() => {
        if (!inputValue) return
        searchBooks(inputValue, startSearchIndex)
    }, [startSearchIndex, inputValue])

    return (
        <StyledSearchForm onSubmit={handleConfirm}>
            <Input
                type="search"
                placeholder="Searching for your book..."
                value={inputValue}
                onChange={handleChangeInputValue}
            />
            <Button text="Search" type="submit" onClick={handleClick} />
        </StyledSearchForm>
    )
})

export default SearchInputContainer
