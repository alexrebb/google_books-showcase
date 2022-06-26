import BooksData from '../../store'
import { observer } from 'mobx-react'
import { memo } from 'react'

import styled from 'styled-components/macro'

const StyledFilter = styled.div`
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
    filterChangeHandler: Function
}

const Filter: React.FC<props> = observer(({ filterChangeHandler }) => {
    const currentCategory = BooksData.currentCategory

    return (
        <StyledFilter>
            <StyledControl>
                <StyledLabel>Categories</StyledLabel>
                <StyledSelect
                    value={currentCategory}
                    onChange={(e) => filterChangeHandler(e)}
                >
                    <option value="all">All</option>
                    <option value="art">Art</option>
                    <option value="biography">Biography</option>
                    <option value="computers">Computers</option>
                    <option value="history">History</option>
                    <option value="medical">Medical</option>
                    <option value="poetry">Poetry</option>
                </StyledSelect>
            </StyledControl>
        </StyledFilter>
    )
})

export default memo(Filter)
