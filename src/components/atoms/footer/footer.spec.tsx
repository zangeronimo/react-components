import { render } from '@testing-library/react'
import Footer from '.'

const makeSut = () => {
  return render(<Footer>Footer</Footer>)
}

describe('Footer', () => {
  it('should be able to render', () => {
    const sut = makeSut()

    expect(sut).toBeTruthy()
  })
})
