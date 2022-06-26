import { Item } from '../types'
import moment from 'moment'

export const sortBooks = (data: Item[]) => {
    const sortedBooksData = data
        .slice()
        .sort(
            (a, b) =>
                moment(b.volumeInfo?.publishedDate).valueOf() -
                moment(a.volumeInfo?.publishedDate).valueOf()
        )

    return sortedBooksData
}
