import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Input from './Input'

const onChange = jest.fn()

describe('Input component', () => {
    it('renders Input component', () => {
        render(
            <Input
                value="Inputvalue"
                type="search"
                onChange={onChange}
                placeholder="search"
            />
        )

        expect(screen.getByDisplayValue('Inputvalue')).toBeInTheDocument()
    })

    it('renders whithout placeholder', () => {
        render(
            <Input
                value="Inputvalue"
                type="search"
                onChange={onChange}
                placeholder="search"
            />
        )

        expect(screen.getByPlaceholderText('search')).toBeInTheDocument()
    })

    it('onChange works', () => {
        render(
            <Input
                value="Inputvalue"
                type="text"
                onChange={onChange}
                placeholder="search"
            />
        )

        userEvent.type(screen.getByRole('textbox'), 'React')

        expect(onChange).toHaveBeenCalledTimes(5)
    })
})
