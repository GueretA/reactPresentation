import { useFetch } from '../utils/hooks'
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner'

import style from '../css/main.module.css'

function About() {

  return (
    <>
      <Header />
      <main className={style.content_padding}>
          <section className={style.collapse_section}>        
          </section>
      </main>
      <Footer />
    </>
  )
}

export default About