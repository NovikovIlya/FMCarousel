import image from '../assets/image-about-dark.jpg'
import imageTwo from '../assets/image-about-light.jpg'

const Main = () => {
  return (
    <div className='flex  mt-[-2px]'>
      <img src={image} />
      <div className='flex justify-center items-center flex-col p-5'>
        <div className='text-3xl text-left w-full'>About our furniture</div>
        <div>Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.</div>
      </div>
      <img src={imageTwo} />
    </div>
  )
}

export default Main