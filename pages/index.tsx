import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import heroImg from '../public/hero-image.png'
import sunshineHeart from '../public/sunshine-heart-icon.svg'
import sunriseAlarm from '../public/sunrise-alarm.svg'
import wavyLines from '../public/wavy-lines-icon.svg'
import Card from '../components/Card'
import HeroContainer from '../components/HeroContainer'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10 lg:mb-20">
      <Head>
        <title>Hatch Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center container">
        <div className="my-3 lg:my-5">
          <Image src={sunriseAlarm} alt="sunrise alarm" />
        </div>
        <div className="mt-5 w-screen">
          <HeroContainer image={heroImg} />
        </div>
        <div className="mt-10 mb-12 text-center">
          <h1 className="text-lg md:text-xl lg:text-2xl text-[#13294b]">
            Your heading here
          </h1>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mt-3 md:mt-8 w-screen px-10 lg:px-20">
            <Card image={wavyLines} text="Text" alt="wavy lines" />
            <Card image={sunshineHeart} text="Text" alt="sunshine heart" />
            <Card image={sunriseAlarm} text="Text" alt="sunrise alarm" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
