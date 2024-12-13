import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-20">
            <Image
                src={'/main-logo.png'}
                height={100}
                width={100}
                alt='logo'
            />
            <div className="flex flex-col justify-center items-center mt-10 gap-2">
                <p className="text-5xl font-bold">alkye</p>
                <p className=" text-gray-400">The easiest test you will do</p>
            </div>
        </div>
    )
}
