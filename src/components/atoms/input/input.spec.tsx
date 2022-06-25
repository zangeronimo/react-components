import { fireEvent, render } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import Input from './'

type Props = {
  name?: string
  id?: string
  label?: string
  placeholder?: string
  required?: boolean
}

const makeSut = ({
  required = false,
  name = 'input',
  id = 'input',
  label = 'Label',
  placeholder = '',
}: Props) => {
  return render(
    <Input
      name={name}
      label={label}
      placeholder={placeholder}
      required={required}
      data-testid={id}
    />,
  )
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
  it('shout get label text', () => {
    const text = faker.random.words(3)
    const { queryByText } = makeSut({ label: text })
    const label = queryByText(text)

    expect(label).toBeTruthy()
  })
  it('shout get label text with * when required', () => {
    const { queryByRole } = makeSut({
      id: 'input',
      label: 'Label',
      required: true,
    })
    const label = queryByRole('textbox', { name: 'Label *' })
    expect(label).toBeTruthy()
  })
  it('shout focus input when click to label', () => {
    const { getByRole, queryByTestId } = makeSut({
      id: 'input',
      label: 'Label',
    })
    const input = queryByTestId('input') as HTMLInputElement
    const label = getByRole('textbox', { name: 'Label' })

    fireEvent.click(label)

    expect(input.focus).toBeTruthy()
  })
  it('shoult be able to render and find a placehouder passed', () => {
    const text = faker.random.word()
    const { queryByTestId } = makeSut({
      name: 'input',
      placeholder: text,
    })
    const input = queryByTestId('input') as HTMLInputElement

    expect(input.placeholder).toBe(text)
  })
})
