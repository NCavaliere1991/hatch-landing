import Image from 'next/image'

const Card = (props: { image: string; text: string; alt: string }) => {
  return (
    <div className="bg-[#f0efec] p-12 lg:p-16 xl:p-28 rounded-lg flex flex-col justify-center items-center">
      <Image src={props.image} alt={props.alt} />
      <h1 className="mt-3 lg:text-lg text-[#13294b]">{props.text}</h1>
    </div>
  )
}

export default Card
