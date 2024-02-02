import { useFetch } from '../utils/hooks'
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner'
import AboutBanner from '../assets/about-banner.jpg'
import style from '../css/main.module.css'

function About() {

  return (
    <>
      <Header />
      <Banner src={AboutBanner} pageClass={style.banner_homeContainer} text="Pet store" />
      <main className={style.content_padding}>
          <section className={style.collapse_section}>
            <br/>
            <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus leo id ante feugiat tincidunt. Praesent gravida turpis ut fringilla consequat. Curabitur maximus, neque eu tempor pellentesque, nisl nibh vestibulum erat, eget cursus nisi dolor cursus tortor. Ut quis diam eu est suscipit vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ligula velit, lobortis quis libero eget, lobortis accumsan ex. Maecenas neque sapien, malesuada sed aliquam eu, placerat eget nunc. Curabitur magna enim, euismod in tristique vel, tincidunt hendrerit neque. Integer in purus ac mi aliquam dapibus. Vivamus tempus pharetra ex, in faucibus magna semper in. Nunc vitae lectus gravida lacus aliquam porttitor. Pellentesque laoreet orci eget tellus convallis, id lacinia justo venenatis.
          </p>
Mauris volutpat lacinia consectetur. Curabitur ac euismod diam. Nam porta lobortis ipsum at scelerisque. Praesent maximus turpis sed pulvinar mattis. Fusce non pretium ex. Morbi tempus nibh odio, quis placerat arcu bibendum sodales. Nunc sollicitudin dictum nibh luctus blandit. Fusce porta aliquam purus vitae tempus. Phasellus volutpat ac erat vitae lacinia. In porta, arcu eu vestibulum feugiat, ipsum ipsum elementum urna, eget iaculis leo lacus ut risus. Ut nec augue magna. Nam non massa eget massa consequat malesuada. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur aliquam, enim vitae sodales tempor, lectus odio imperdiet massa, et consequat sem orci id tellus.

Morbi in eros non quam interdum euismod sit amet at velit. Curabitur faucibus aliquet aliquet. Donec commodo egestas magna, luctus ornare leo rutrum non. Etiam vel risus eu eros blandit efficitur in eu mi. Duis a malesuada ante. Donec porttitor diam at sem viverra, sed tincidunt massa viverra. Mauris luctus dolor eu lacus fringilla, id mollis lorem hendrerit.

Nam et purus ut est varius euismod vehicula sed purus. Donec sed tellus eget tortor pulvinar euismod. Nunc mi dolor, auctor eget justo eget, ornare aliquam massa. Curabitur pretium ultrices ipsum, nec maximus est rutrum vitae. Nam ut ipsum quis metus gravida fringilla. Donec ornare faucibus quam, vestibulum hendrerit velit euismod a. Nullam vitae risus non nisl dapibus aliquet vel id ante. Nullam sed sem nec sapien elementum ultricies. Sed eu nunc elementum, accumsan nibh vel, imperdiet lectus. Quisque vitae malesuada risus, id dictum massa.

Mauris arcu sem, fermentum sit amet porttitor mattis, vestibulum at magna. Praesent quis ante volutpat, ultrices metus sed, pulvinar enim. Donec consequat pellentesque consequat. Vivamus pulvinar risus at dignissim ultricies. Suspendisse potenti. In id augue et dolor venenatis sollicitudin vitae vitae metus. Vestibulum aliquet molestie massa quis commodo. Nunc et augue et dolor semper maximus quis a ex.     
          </section>
      </main>
      <Footer />
    </>
  )
}

export default About