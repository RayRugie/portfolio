import React from 'react';
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import webDervAnimation from '../../assets/Banner/91382-web-development.json'

const Banner = () => {




  return (
    <div>
        <div className="bg-base-200 p-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
    <div className="w-[300px] lg:w-full">
    <Lottie animationData={webDervAnimation} loop={true} />
    </div>
    <div className='w-[300px] lg:w-full flex flex-col justify-center items-center'>
      <h1 className="lg:text-5xl text-secondary font-bold">
      <Typewriter
        options={{
        strings: ["Welcome", "I am Omorugie Oyibotha", "A Frontend Web Developer"],
        autoStart: true,
        loop: true,
  }}
/>
        </h1>
      <p className="py-6 lg:text-lg text-sm text-center">I am a frontend web developer, that specializes in designing and developing the user interface of websites and applications. 
      I am skilled in using languages such as HTML, CSS & JavaScript to create visually appealing and functional websites that provide a seamless user experience. 
      I have a keen eye for detail and a passion for staying up to date with the latest web development trends and technologies. 
      My strong problem-solving and communication skills allow me to work effectively with cross-functional teams and deliver high-quality products. 
      Overall, i am a valuable asset to any organization looking to enhance their online presence.</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
