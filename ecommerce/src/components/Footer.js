import styles from './Footer.module.css'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; 2024 Online Shop Ltd. All Rights Reserved.</p>
      <small><a className={styles.attribution} href="https://www.vecteezy.com/free-photos/honey">Honey Stock photos by Vecteezy</a></small>
    </footer>
  )
}