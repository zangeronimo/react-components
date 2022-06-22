import { Aligns } from '@/components/utils/types'
import { ReactNode } from 'react'

import Styles from './button-group.module.scss'

type Props = {
  align?: Aligns
  nowrap?: boolean
  children: ReactNode
}

const ButtonGroup = ({ align = 'right', nowrap = false, children }: Props) => {
  const styles = `${Styles.container} ${Styles[align]} ${
    nowrap ? Styles.nowrap : ''
  }`
  return <div className={styles}>{children}</div>
}

export default ButtonGroup
