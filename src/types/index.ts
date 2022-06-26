export interface Books {
    kind?: string
    totalItems?: number
    items: Item[]
}

export interface Item {
    id?: string
    volumeInfo?: VolumeInfo
}

export interface VolumeInfo {
    title: string
    authors: string[]
    description: string
    categories: string[]
    imageLinks: ImageLinks
    publishedDate: string
}

export interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
}
