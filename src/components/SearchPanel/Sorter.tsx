import BooksData from '../../store'
import { observer } from 'mobx-react'
import { memo, useCallback } from 'react'

import styled from 'styled-components/macro'

const StyledSorter = styled.div`
    color: rgb(29, 26, 26);
    padding: 0 0.5rem;
    @media (max-width: 575px) {
        margin: 0 0 0.5rem 0;
        padding-left: 1rem;
    }
`
const StyledControl = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
const StyledLabel = styled.label`
    color: rgb(29, 26, 26);
    padding: 0 0.5rem;
    font-weight: bold;
`
const StyledSelect = styled.select`
    color: rgb(29, 26, 26);
    padding: 0.5rem 0.5rem;
    font-weight: bold;
    border-radius: 6px;
    @media (max-width: 575px) {
        padding: 0.2rem 0;
    }
`

interface props {
    sorterChangeHandler: Function
}

const Sorter: React.FC<props> = observer(({ sorterChangeHandler }) => {
    const currentSorter = BooksData.currentSorter

    return (
        <StyledSorter>
            <StyledControl>
                <StyledLabel>Sorting by</StyledLabel>
                <StyledSelect
                    value={currentSorter}
                    onChange={useCallback(
                        (e: any) => sorterChangeHandler(e),
                        [sorterChangeHandler]
                    )}
                >
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                </StyledSelect>
            </StyledControl>
        </StyledSorter>
    )
})

export default memo(Sorter)
