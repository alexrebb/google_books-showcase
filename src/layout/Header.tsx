import SearchInputContainer from '../components/SearchPanel/SearchInputContainer'
import FilterContainer from '../components/SearchPanel/FilterContainer'
import SortContainer from '../components/SearchPanel/SortContainer'
import Button from '../components/UI/Button'
import BooksData from '../store'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

import styled from 'styled-components/macro'

const StyledWrapper = styled.header`
    background-color: rgba(175, 163, 163, 0.5);
`
const StyledHeader = styled.div`
    max-width: 100%;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    @media (max-width: 575px) {
        height: 250px;
        padding: 0;
    }
`
const StyledFilterSortWrapper = styled.div`
    display: flex;
    margin-top: 15px;
    @media (max-width: 575px) {
        flex-direction: column;

        margin-top: 1rem;
    }
`

const Header = () => {
    return (
        <StyledWrapper>
            <StyledHeader>
                <h2>Search for books</h2>
                <SearchInputContainer />
                <StyledFilterSortWrapper>
                    <FilterContainer />
                    <SortContainer />
                </StyledFilterSortWrapper>
            </StyledHeader>
        </StyledWrapper>
    )
}

export default Header
