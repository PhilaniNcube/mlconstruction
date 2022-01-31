import { motion, useAnimation } from 'framer-motion'
import React, { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
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
      <header className="-mt-12 h-[55vh] bg-orange-600" id="about">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-center space-y-6 text-white">
          <h1 className="text-2xl font-light uppercase md:text-4xl xl:text-5xl">
            Why Choose <span className="font-bold">Us?</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm">
            We provide labour intensive services to ensure that we create more
            employment opportunities. We aim to conclude any job within or
            before the allocated time frame.
          </p>

          <div className="mt-8 grid w-full grid-cols-1 lg:grid-cols-2">
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
            <div className="ml-3 border-l-2 border-white px-4 text-left">
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
      </header>
      <section ref={ref} className="bg-white py-16" id="services">
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
              <Link href="/contact">
                <button className="flex flex-col bg-orange-600 px-8 py-2 text-center text-lg font-bold uppercase text-white md:flex-row md:items-center md:space-x-2">
                  <p>Get In Touch</p>
                  <img src="/images/whatsapp.svg" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Header
