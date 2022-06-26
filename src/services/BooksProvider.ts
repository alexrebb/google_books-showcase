import { API_KEY, API_URL } from '../services/constants'
import handleHttpError from '../utils/handleHttpError'

class BooksProvider {
    static getBooks = async (value: string, startIndex: string) => {
        return await fetch(
            `${API_URL}=${API_KEY}&q=${value}&maxResults=30&startIndex=${startIndex}`
        )
            .then((res) => handleHttpError(res))
            .then((res) => res.json())
    }
}

export default BooksProvider
