import { HTMLAttributes } from 'react'
import Label from '../label'

import Styles from './select.module.scss'

export interface SelectData {
  label: string
  value: number | string
}

type Props = HTMLAttributes<HTMLSelectElement> & {
  label: string
  data: SelectData[]
  required?: boolean
}

const Select = ({ label, data, required = false, ...rest }: Props) => {
  return (
    <div className={Styles.container}>
      <Label id="label" required={required} label={label} />
      <select required={required} {...rest}>
        {!!data.length &&
          data.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Select
