import Image, { StaticImageData } from 'next/image'

const HeroContainer = (props: { image: StaticImageData }) => {
  return (
    <div className="relative">
      <div className="absolute top-3 left-5 md:top-20 md:left-24 lg:top-24 lg:left-28 xl:top-36 xl:left-40 2xl:top-48 2xl:left-52">
        <h1 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl text-[#13294b]">
          Rise & Shine
        </h1>
        <p className="md:mt-3 mt-1 text-xs md:text-sm lg:text-base xl:text-lg w-7/12 md:w-5/12 tracking-wide text-[#152b4d] lg:leading-loose">
          Coffee cortado, qui beans galao froth to go. Blue mountain et single
          origin aged flavour variety affogato.
        </p>
        <button
          onClick={() => console.log('click')}
          className="uppercase text-xs md:text-sm xl:text-base text-center text-white bg-[#596ea1] p-3 md:p-4 md:w-3/12 mt-2 md:mt-4"
        >
          Learn more
        </button>
      </div>
      <Image src={props.image} alt="hero" className="w-full h-auto -z-10" />
    </div>
  )
}

export default HeroContainer
