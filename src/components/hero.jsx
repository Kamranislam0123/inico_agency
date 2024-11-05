import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section>
      <div className="relative h-screen">
        <Image
          src="/54 (BONUS).png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="flex flex-row justify-between items-end h-full relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-4 text-8xl z-10">
            Lead <span style={{ color: '#4870FF' }}>Product</span> <br />
            <span style={{ color: '#4870FF' }}>Designer</span> Currently <br /> at Meta
            Previously <br /> at <span style={{ color: '#4870FF' }}>Apple</span>
          </div>
          <div className="absolute right-0 bottom-1/3 mr-32  text-2xl z-10">
            Here we go a small intro<br />
            paragraph that talks about<br />
            our company and team
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero