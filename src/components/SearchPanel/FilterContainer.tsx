import Filter from './Filter'
import { observer } from 'mobx-react'
import BooksData from '../../store'
import { useCallback } from 'react'

const FilterContainer = observer(() => {
    const сategoriesChangeHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            BooksData.changeCurrentCategory(e.target.value)
        },
        []
    )

    return <Filter filterChangeHandler={сategoriesChangeHandler} />
})

export default FilterContainer
