import { Skins } from '@/components/utils/types'
import { ReactNode } from 'react'
import Styles from './nav.module.scss'

type Props = {
  skyn?: Skins | 'dark'
  children: ReactNode
}

const Nav = ({ skyn = 'dark', children }: Props) => {
  const styles = `
    ${Styles.container}
    ${Styles[skyn]}
  `
  return <nav className={styles}>{children}</nav>
}

export default Nav
