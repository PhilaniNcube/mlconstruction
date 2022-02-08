import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <header className="relative -z-20 mb-12 flex min-h-screen items-center justify-center overflow-hidden">
      <div className="relative z-30 flex flex-col items-center justify-center rounded-xl p-5 text-2xl text-white">
        <motion.h1
          initial={{ x: `100%`, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl font-light uppercase md:text-4xl xl:text-5xl"
        >
          We Offer Creative Methods
        </motion.h1>
        <motion.h1
          className="text-2xl font-medium uppercase md:text-4xl xl:text-5xl"
          initial={{ x: `-100%`, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          To Meet Your Needs
        </motion.h1>

        <div className="mx-auto mt-4 max-w-6xl text-center text-white">
          <p className="text-sm">
            Mas-Lu trading CC is an emerging construction company. We are
            registered in CIDB Grade 3CEPE and 1GB/PE and also registered with
            NHBRC. As a company, we strive to always provide efficient and the
            best quality service to ensure the growth of our company. In our
            employ, we have qualified individuals in various fields of
            engineering. ML Construction is a level 1 B-BBEE emerging company
            that has forged a reputation through its work ethics, attention to
            safety and putting the interests of the client at the forefront.
          </p>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 min-h-full w-auto min-w-full max-w-none"
      >
        <source
          src="https://res.cloudinary.com/athenamedia-co-za/video/upload/v1643137491/videos/video_pa7wn9.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </header>
  )
}

export default Hero
