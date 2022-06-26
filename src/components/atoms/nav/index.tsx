import { Skins } from '@/components/utils/types'
import Styles from './nav.module.scss'

type Props = {
  skyn?: Skins | 'dark'
}

const Nav = ({ skyn = 'dark' }: Props) => {
  const styles = `
    ${Styles.container}
    ${Styles[skyn]}
  `
  return <nav className={styles}>nav</nav>
}

export default Nav
