import { Aligns } from '@/components/utils/types'
import { ReactNode } from 'react'

import Styles from './group.module.scss'

type Props = {
  align?: Aligns
  nowrap?: boolean
  children: ReactNode
}

const Group = ({ align = 'right', nowrap = false, children }: Props) => {
  const styles = `${Styles.container} ${Styles[align]} ${
    nowrap ? Styles.nowrap : ''
  }`
  return <div className={styles}>{children}</div>
}

export default Group
