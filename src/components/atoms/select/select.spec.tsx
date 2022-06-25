import { faker } from '@faker-js/faker'
import { render } from '@testing-library/react'
import Select, { SelectData } from '.'

const baseData: SelectData[] = [
  {
    label: 'item1',
    value: '1',
  },
  {
    label: 'item2',
    value: '2',
  },
  {
    label: 'item3',
    value: '3',
  },
]

type Props = {
  label?: string
  data?: SelectData[]
  required?: boolean
}

const makeSut = ({ label = '', data = baseData, required = false }: Props) =>
  render(<Select label={label} data={data} required={required} />)

describe('Select', () => {
  it('should be able to render', () => {
    const sut = makeSut({})
    expect(sut).toBeTruthy()
  })
  it('should be able to get a label value passed', () => {
    const text = faker.random.word()
    const { queryByText } = makeSut({ label: text })
    const label = queryByText(text)

    expect(label).toBeTruthy()
  })
  it('should be able to get a label with * value when required', () => {
    const text = 'Label'
    const { queryByText } = makeSut({ label: text, required: true })
    const label = queryByText(`${text} *`)

    expect(label).toBeTruthy()
  })
  it('should be able to get a option', () => {
    const { queryByText } = makeSut({})
    const select = queryByText('item3')

    expect(select).toBeTruthy()
  })
})
