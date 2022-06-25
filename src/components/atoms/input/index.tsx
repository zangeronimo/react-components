import { HTMLAttributes } from 'react'
import Label from '../label'

import Styles from './input.module.scss'

type Props = HTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
  required?: boolean
}

const Input = ({ label, required = false, ...rest }: Props) => {
  return (
    <div className={Styles.container}>
      <Label required={required} id={rest.name} label={label} />
      <input type="text" required={required} id={rest.name} {...rest} />
    </div>
  )
}

export default Input
