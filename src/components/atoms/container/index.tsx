import { ReactNode } from 'react'
import Styles from './container.module.scss'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return <section className={Styles.container}>{children}</section>
}

export default Container
