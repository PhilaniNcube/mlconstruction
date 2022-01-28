import { motion, useAnimation } from 'framer-motion'
import React, { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import s from '../About/Grid.module.css'

const Header = () => {
  const { ref, inView } = useInView()

  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1.5,
        },
      })
    }

    if (!inView) {
      animation.start({
        y: '-100vh',
        opacity: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
        },
      })
    }
  }, [inView])

  return (
    <Fragment>
      <header className="-mt-12 h-[55vh] bg-orange-600" id="services">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-center space-y-6 text-white">
          <h1 className="text-2xl font-light uppercase md:text-4xl xl:text-5xl">
            Why Choose <span className="font-bold">Us?</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm">
            We provide labour intensive services to ensure that we create more
            employment opportunities. We aim to conclude any job within or
            before the allocated time frame.
          </p>
          <p className="mt-4 max-w-2xl text-sm">See some examples below:</p>
        </div>
      </header>
      <section ref={ref} className="bg-white py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div className="grid grid-cols-3 gap-6" animate={animation}>
            <div className={s.grid}>
              <img className={s.gridimage} src="/images/excavator.jpg" alt="" />
              <div className="absolute bottom-0 left-0 right-0 flex h-full items-center justify-center px-6 pb-7">
                <p className="text-xl font-medium uppercase leading-6 text-white">
                  Civil Construction
                </p>
                <ul>
                  <li>Ablution facilities</li>
                  <li>Road signs and guardrails</li>
                  <li>Paving</li>
                  <li>Civil Construction</li>
                  <li>Road maintenance and construction</li>
                  <li>Subsoil drainage</li>
                  <li>Concrete work and structural steel</li>
                  <li>Grass cutting and Bush clearing</li>
                  <li>Water pumps and sewer repairs and maintenance</li>
                </ul>
              </div>
            </div>
            <div className={s.grid}>
              <img
                className={s.gridimage}
                src="/images/construction.jpg"
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 flex h-full items-center justify-center px-6 pb-7">
                <p className="text-xl font-medium uppercase leading-6 text-white">
                  Building Construction
                </p>
                <ul>
                  <li>Landscaping</li>
                  <li>Glazing</li>
                  <li>Roofing</li>
                  <li>Wall plate and plastering</li>
                  <li>Slab work</li>
                  <li>Ceiling/doors</li>
                  <li>Building maintenance</li>
                </ul>
              </div>
            </div>
            <div className={s.grid}>
              <img className={s.gridimage} src="/images/building.jpg" alt="" />
              <div className="absolute bottom-0 left-0 right-0 flex h-full items-center justify-center px-6 pb-7">
                <p className="text-xl font-medium uppercase leading-6 text-white">
                  Portfolio
                </p>
                <h2 className="font-medium">View Our Portfolio</h2>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between py-10">
            <div className="grid flex-1 grid-cols-3 gap-4">
              <h2 className="self-center text-3xl font-bold text-orange-600">
                Our Clients
              </h2>
              <img
                src="/images/buffalo.jpg"
                alt="buffalo City"
                className="h-full w-1/3 object-contain"
              />
              <img
                src="/images/comp.jpg"
                alt="Compensation Fund"
                className="h-full w-1/3 object-contain"
              />
              <img
                src="/images/nyda.jpg"
                alt="NYDA"
                className="h-full w-1/3 object-contain"
              />
              <img
                src="/images/amathole.jpg"
                alt="Amathole"
                className="h-full w-1/3 object-contain"
              />
              <img
                src="/images/ec.jpg"
                alt="Eastern Cape"
                className="h-full w-1/3 object-contain"
              />
              <img
                src="/images/down.jpg"
                alt="Down Touch Investments"
                className="h-full w-1/3 object-contain"
              />
              <img
                src="/images/kei.jpg"
                alt="Great Kei"
                className="h-full w-1/3 object-contain"
              />
            </div>
            <div>
              <button className="flex flex-col bg-orange-600 px-8 py-2 text-center text-lg font-bold uppercase text-white md:flex-row md:items-center md:space-x-2">
                <p>Get In Touch</p>
                <img src="/images/whatsapp.svg" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Header
