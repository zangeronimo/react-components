import { Sizes, Skins } from '@/components/utils/types'
import { HTMLAttributes, ReactNode } from 'react'

import Styles from './button.module.scss'

type Props = HTMLAttributes<HTMLButtonElement> & {
  skin?: Skins
  outline?: boolean
  full?: boolean
  size?: Sizes
  disabled?: boolean
  children: ReactNode
}

const Button = ({
  skin = 'primary',
  outline = false,
  full = false,
  disabled = false,
  size = 'normal',
  children,
  ...rest
}: Props) => {
  const bg = outline ? `outline_${skin}` : skin
  const styles = `${Styles[bg]} ${Styles[size]} ${full ? Styles.full : ''}`
  return (
    <button type="button" disabled={disabled} className={styles} {...rest}>
      {children}
    </button>
  )
}
export default Button
