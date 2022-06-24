import { fireEvent, render } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import Input from './'

type Props = {
  name?: string
  id?: string
}

const makeSut = ({ name = 'input', id = 'input' }: Props) => {
  return render(<Input name={name} data-testid={id} />)
}

describe('Input', () => {
  it('should be able to render a input', () => {
    const sut = makeSut({})

    expect(sut).toBeTruthy()
  })
  it('shoult be able to render and find a value passed', () => {
    const { queryByTestId } = makeSut({ name: 'input' })
    const input = queryByTestId('input') as HTMLInputElement
    const value = faker.random.word()
    fireEvent.change(input, { target: { value } })

    expect(input.value).toBe(value)
  })
})
