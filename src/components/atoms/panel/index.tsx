import { Skins } from '@/components/utils/types'
import { ReactNode } from 'react'

import Styles from './panel.module.scss'

type Props = {
  title?: string
  footer?: string
  skin?: Skins
  children: ReactNode
}

const Panel = ({
  title = undefined,
  footer = undefined,
  skin = 'secondary',
  children,
}: Props) => {
  const styles = `${Styles.container} ${Styles[skin]}`
  const titleStyles = `${Styles.title} ${Styles[skin]}`

  return (
    <div className={styles}>
      {!!title && <div className={titleStyles}>{title}</div>}
      <div className={Styles.content}>{children}</div>
      {!!footer && <div className={Styles.footer}>{footer}</div>}
    </div>
  )
}

export default Panel
