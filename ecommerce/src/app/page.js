
import styles from './page.module.css'
import NavBarVertical from "@/components/form/NavBarVertical"
import Footer from '@/components/Footer'
import NavDrawer from '@/components/NavDrawer'

 export default function Home() {


  return (
    <>
    <div className={styles.container_lp}>
      <div className={styles.h1_wrapper}>
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="9em" height="9em" viewBox="0 0 48 48">
          <path fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round" d="M30.012 18.455a10.108 10.108 0 0 1 0 20.217c-5.388 0-16.96-1.92-20.079-7.759"/>
          <path fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round" d="M30.012 18.455H10.729a6.23 6.23 0 1 0 3.874 11.072l.017.021Z"/>
          <path fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round" d="m13.971 34.794l-8.264 2.859l4.226-6.74m13.801-7.873c-1.921 3.472-1.738 11.395 3.997 15.538M17.383 27.557c-.74 1.52.053 6.2 2.313 9.595"/>
          <circle cx="31.962" cy="25.732" r="2.79" fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="41.448" cy="15.309" r="2.052" fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="34.985" cy="11.38" r="2.052" fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round"/>
          <path fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round" d="M33.26 18.99c.985-1.223 3.242-3.457 6.112-3.79m-8.795 3.271a8.93 8.93 0 0 1 2.733-5.932"/>
        </svg>
        <h1 className={styles.h1}>
          <p className={styles.h1_text1} >Honey</p>
          <p className={styles.h1_text2}>Buzz</p>
        </h1>
        <nav className={styles.mobileNav}>
          <NavDrawer />
        </nav>
      </div>
      
      <section className={styles.nav_section}>
        <NavBarVertical />
      </section>
      <section className={styles.main_img_section}>
        <img className={styles.main_img} src="/main.jpg" />
      </section>
    </div>
    <Footer />
    </>
  )
}

