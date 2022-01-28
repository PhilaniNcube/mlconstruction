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
          We Offer Creative Method
        </motion.h1>
        <motion.h1
          className="text-2xl font-medium uppercase md:text-4xl xl:text-5xl"
          initial={{ x: `-100%`, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          To Meet Your Needs
        </motion.h1>

        <button className="mt-4 rounded-lg border-2 border-orange-600 px-6 py-1 text-sm">
          Learn more
        </button>
        <div className="mx-auto mt-4 max-w-6xl text-center text-white">
          <p className="text-sm">
            Mas-Lu trading CC is an emerging construction company. We are
            registered in CIDB Grade 3CEPE and 1GB/PE and also registered with
            NHBRC. As a company, we strive to always provide efficient and the
            best quality service to ensure the growth of our company. In our
            employ, we have qualified individuals in various fields of
            engineering.
          </p>
          <div
            id="about"
            className="mt-8 grid w-full grid-cols-1 lg:grid-cols-2"
          >
            <div className="flex justify-between">
              <div className="flex h-full w-full translate-y-6 flex-col">
                <p className="text-sm">
                  <span className="font-medium uppercase">Our Mission</span> is
                  to diversify service delivery in the Eastern Cape by offering
                  unique and creative methods to meet the need of our clients.
                </p>
              </div>
              <div className="flex h-full w-full translate-y-6 flex-col">
                <p className="text-sm">
                  <span className="font-medium uppercase">Our Values</span> are
                  rooted in our committment to encourage the Eastern Cape youth
                  to plough back to their communities and to strive to be
                  entrepreneurs. We are driven by principles of uBuntu and
                  integrity.
                </p>
              </div>
            </div>
            <div className="ml-3 border-l-2 border-orange-600 px-4 text-left">
              <h2 className="text-left text-2xl font-light uppercase md:text-3xl xl:text-4xl">
                GOALS
              </h2>
              <ul className="mt-4 list-disc pl-6 text-sm text-white">
                <li>
                  To provide quality and professional services to the province
                  of the Eastern Cape
                </li>
                <li>
                  To develop and improve the standard of service delivery in the
                  province of the Eastern Cape
                </li>
                <li>
                  To empower local communities by creating employment
                  opportunities and developing the youth by offering
                  internships.
                </li>
              </ul>
            </div>
          </div>
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
