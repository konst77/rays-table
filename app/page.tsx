import React from 'react'
import Shader from './components/shader-gradient'
import OptimizedImage from './components/OptimizedImage'
import logo from '@/public/img/main.svg'
import DemoForm from './components/email/DemoForm'


function RootPage() {
  return (
    <>
      <div className='fixed h-screen w-screen bg-black text-white top-0 left-0 z-20 flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-6 justify-center items-center w-full h-full bg-black/20 backdrop-blur-3xl p-10 rounded-lg'>
          <OptimizedImage
            alt=''
            src={logo.src}
            height={40}
            width={120}
            className=''
          />
          <h1 className='text-[40px] md:text-[72px]'>Join our table</h1>
          <p className='text-center text-[14px] md:text-[18px]'>
            We will be opening our table soon... <br />Join our waitlist by subscribing your email below.
          </p>

          {/* Form Fields */}
          <DemoForm />

          {/* Social Links */}
          <div>

          </div>
        </div>
        <Shader className="absolute top-0 h-full w-full -z-10" />
      </div>
    </>
  )
}

export default RootPage