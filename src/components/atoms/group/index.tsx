import { Aligns } from '@/components/utils/types'
import { ReactNode } from 'react'

import Styles from './group.module.scss'

type Props = {
  align?: Aligns
  nowrap?: boolean
  column?: boolean
  children: ReactNode
}

const Group = ({
  align = 'right',
  column = false,
  nowrap = false,
  children,
}: Props) => {
  const styles = `
    ${Styles.container}
    ${Styles[align]}
    ${nowrap ? Styles.nowrap : ''}
    ${column ? Styles.column : ''}
  `
  return <div className={styles}>{children}</div>
}

export default Group
