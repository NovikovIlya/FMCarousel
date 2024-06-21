import { useState } from 'react'
import {  Carousel } from 'antd'
import React from 'react'
import imageOne from '../assets/desktop-image-hero-1.jpg'
import imageTwo from '../assets/desktop-image-hero-2.jpg'
import imageThree from '../assets/desktop-image-hero-3.jpg'


function Header() {
    const [count, setCount] = useState(1)
    const carouselRef = React.createRef<any>();
    const array = [
        { title: 'Discover innovative ways to decorate', text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.' },
        { title: "We are available all across the globe", text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, were in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today." },
        { title: 'Manufactured with the best materials', text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office' }
    ]

    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    function onChange(currentSlide: any) {
        setCount(currentSlide + 1)

    }

    return (
        <>
            <div className='flex border-b-2'>
                <div className='relative w-[65%]'>
                    <Carousel ref={carouselRef} infinite={false} afterChange={onChange}>
                        <div>
                            <img className='w-full' src={imageOne} />
                        </div>
                        <div>
                            <img className='w-full' src={imageTwo} />
                        </div>
                        <div>
                            <img className='w-full' src={imageThree} />
                        </div>
                    </Carousel>
                    <div className='flex  gap-2 absolute top-2 left-2 text-white'>
                        <div>Room</div>
                        <div>shop</div>
                        <div>about</div>
                        <div>contact</div>
                    </div>
                </div>

                <div className='w-[45%] flex justify-center items-center flex-col relative'>
                    <div>{array.map((item, index) => {
                        return index + 1 === count ? <div className='h-[220px] p-10'><div className='text-3xl'>{item.title}</div><div className=' break-all'>{item.text}</div> </div>: null
                    })}</div>
                    <div className='w-full p-10'>Shop now -&gt; </div>

                    <div className='flex flex-row absolute left-0 bottom-0'>
                    <div
                        className='bg-black text-white w-[50px] flex justify-center items-center cursor-pointer h-[50px]'
                        onClick={() => {
                            carouselRef.current.prev();
                        }}
                    >
                        &lt;
                    </div>
                    <div
                        className='bg-black text-white w-[50px] flex justify-center items-center cursor-pointer h-[50px]'
                        onClick={() => {
                            carouselRef.current.next();
                        }}
                    >
                        &gt;
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
