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
                <div className={style.collapse_container} key={id} id={id}>
                  <Collapse title={title} content={<p className={style.collapse_content}>{content}</p>} />
                </div>
          </section>

      </main>
      <Footer />
    </>
  )
}

export default About