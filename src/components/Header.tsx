import { useState } from 'react'
import { Button, Carousel } from 'antd'
import React from 'react'

function Header() {
    const [count, setCount] = useState(1)
    const carouselRef = React.createRef<any>();
    const array = [
        { title: 'aaa', text: 'asdsad' },
        { title: 'bb', text: 'xxx' },
        { title: 'bbzz', text: 'xxbbx' }
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
            <div className='flex'>
                <div className='relative w-[70%]'>
                    <Carousel ref={carouselRef} infinite={false} afterChange={onChange}>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                    </Carousel>
                    <div className='flex  gap-2 absolute top-2 left-2 text-white'>
                        <div>Room</div>
                        <div>shop</div>
                        <div>about</div>
                        <div>contact</div>
                    </div>
                </div>

                <div className='w-[30%]'>
                    <div>{array.map((item, index) => {
                        return index + 1 === count ? item.title : null
                    })}</div>
                    
                    <Button
                        onClick={() => {
                            carouselRef.current.prev();
                        }}
                    >
                        goto prev
                    </Button>
                    <Button
                        onClick={() => {
                            carouselRef.current.next();
                        }}
                    >
                        goto next
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Header
