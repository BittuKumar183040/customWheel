import React, { useState } from 'react';
import Images from './Images';

const Wheel = ({id, name, price, setIndex}) => {
    return(
        <div onClick={()=>setIndex(id)} className='cursor-pointer shadow-md flex justify-center flex-col items-center bg-gray-300 p-2 px-10 rounded-md
         transition hover:shadow-sm
        '>
            <p className=' text-xl '>{name}</p>
            <p className=' text-black font-semibold'>{price}</p>
        </div>
    )
}

const CarSection = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className=' bg-slate-100 m-2 rounded-md'>
            <div className='lg:w-4/5 w-full p-2 '>
                <Images index={index}/>
            </div>
            <div className='lg:absolute lg:-translate-y-1/2 right-10 top-1/2'>
                <div className=' w-full flex flex-row lg:flex-col justify-center gap-7 p-2'>
                    <Wheel id={0} name={"default"} price={"$0"} setIndex={(id)=>setIndex(id)} />
                    <Wheel id={1} name={"Style 1"} price={"$2000"} setIndex={(id)=>setIndex(id)} />
                    <Wheel id={2} name={"Style 2"} price={"$2400"} setIndex={(id)=>setIndex(id)} />
                </div>
            </div>
        </div>
    )
}

export default CarSection