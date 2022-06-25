import Styles from './label.module.scss'

type Props = {
  label: string
  id: string
  required?: boolean
}

const Label = ({ label, id, required = false }: Props) => {
  return (
    <label className={Styles.container} htmlFor={id}>
      {required ? `${label} *` : label}
    </label>
  )
}

export default Label
