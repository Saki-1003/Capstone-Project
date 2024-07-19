import styles from './Footer.module.css'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; 2024 Honey Buzz Ltd. All Rights Reserved.</p>
      <small>
        <a className={styles.attribution} href="https://www.vecteezy.com/free-photos/honey">Honey Stock photos by Vecteezy</a>
        <a className={styles.attribution} href="https://pixabay.com/users/daria-yakovleva-3938704/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1958464">Image by Дарья Яковлева</a> 
        <a className={styles.attribution} href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1958464">from Pixabay</a>     
      </small>
    </footer>
  )
}