import { render } from '@testing-library/react'
import Nav from '.'

const makeSut = () => {
  return render(<Nav />)
}

describe('Nav', () => {
  it('should be able to render', () => {
    const sut = makeSut()

    expect(sut).toBeTruthy()
  })
})
