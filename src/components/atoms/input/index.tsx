import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLInputElement> & {
  name?: string
}

const Input = ({ ...rest }: Props) => {
  return (
    <div>
      <input type="text" {...rest} />
    </div>
  )
}

export default Input
