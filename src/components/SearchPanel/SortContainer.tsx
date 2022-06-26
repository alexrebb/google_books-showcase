import Sorter from './Sorter'
import { observer } from 'mobx-react'
import BooksData from '../../store'
import { useCallback } from 'react'

const SortContainer = observer(() => {
    const sorterChangeHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            BooksData.changeCurrentSorter(e.target.value)
        },
        []
    )

    return <Sorter sorterChangeHandler={sorterChangeHandler} />
})

export default SortContainer
