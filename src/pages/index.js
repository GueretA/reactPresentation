/*import Image from "next/image";
*/
import { Inter } from "next/font/google";
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner'
import CardsSet from '../components/cardSet'
import HomeBanner from '../assets/home-banner.png'
import ButtonUp from '../components/buttonUp'

import style from '../css/main.module.css'
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <NextUIProvider>
      <Header />
      <main className={style.content_padding}>
        <Banner src={HomeBanner} pageClass={style.banner_homeContainer} text="Pet store" />
      </main>
      <CardsSet />
      <ButtonUp/>
      <Footer />
      </NextUIProvider>
  );
}
