import { Item } from '../types'

export const filterBooks = (data: Item[], currentCategory: string) => {
    const correctData = data.filter(
        (item) =>
            item.volumeInfo?.categories &&
            Array.isArray(item.volumeInfo.categories)
    )
    const filteredBooks = correctData.filter(
        (item) =>
            item.volumeInfo?.categories[0]?.toLowerCase() === currentCategory
    )
    return filteredBooks
}
