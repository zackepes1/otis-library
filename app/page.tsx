import Hero from '@/components/Hero'
import styles from "../styles";
import Cards from './pages/Cards'
import Events from '@/components/Events'
import Teen from './pages/Teen'
import Community from './pages/Community'
import LibraryCards from './pages/LibraryCards'



export default function Home() {
  return (
    <main>
        <div>
      <div className={`${styles.boxWidth} bg-black`}>
        <Hero />
      </div>
    </div>
    <div className="bg-primary p-12">
        <Cards/>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      </div>
      </div>
      <div className={`bg-secondary lg:p-12 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Events/>
        <Teen/>
        <Community/>
      </div>
      </div>
      <div className={`bg-otisBlue p-12 `}>
      <div className={`${styles.boxWidth}`}>
        <LibraryCards/>
      </div>
      </div>
    </main>
  )
}
