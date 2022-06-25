import { HTMLAttributes } from 'react'

import Styles from './input.module.scss'

type Props = HTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
  required?: boolean
}

const Input = ({ label, required = false, ...rest }: Props) => {
  return (
    <div className={Styles.content}>
      <label htmlFor={rest.name}>{required ? `${label} *` : label}</label>
      <input type="text" required={required} id={rest.name} {...rest} />
    </div>
  )
}

export default Input
