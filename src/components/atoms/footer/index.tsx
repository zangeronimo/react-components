import { ReactNode } from 'react'
import Styles from './footer.module.scss'

type Props = {
  children: ReactNode
}

const Footer = ({ children }: Props) => {
  return <footer className={Styles.container}>{children}</footer>
}

export default Footer
