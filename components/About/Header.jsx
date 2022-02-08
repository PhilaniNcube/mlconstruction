import { motion, useAnimation } from 'framer-motion'
import React, { Fragment, useEffect } from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
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

          <div className="flex flex-col py-10">
            <div className="w-full py-8">
              <h2 className="py-4 text-center text-3xl font-bold text-orange-600">
                Our Clients
              </h2>
              <div className="flex flex-wrap justify-between space-x-6 space-y-4">
                <img
                  src="/images/buffalo.jpg"
                  alt="buffalo City"
                  className="h-[100px]  object-contain"
                />

                <img
                  src="/images/nyda.jpg"
                  alt="NYDA"
                  className="h-[100px]  object-contain"
                />
                <img
                  src="/images/amathole.jpg"
                  alt="Amathole"
                  className="h-[100px]  object-contain"
                />
                <img
                  src="/images/ec.png"
                  alt="Eastern Cape"
                  className="h-[100px]  object-contain"
                />
                <img
                  src="/images/down.jpg"
                  alt="Down Touch Investments"
                  className="h-[100px]  object-contain"
                />
                <img
                  src="/images/kei.jpg"
                  alt="Great Kei"
                  className="h-[100px]  object-contain"
                />
                <img
                  src="/images/wbho.png"
                  alt="Great Kei"
                  className="w-[170px]  object-contain"
                />
              </div>
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
      <section className="mt-4">
        <h2 className="py-4 text-center text-3xl font-bold text-orange-600">
          Our Work
        </h2>
        <div className="flex justify-center 2xl:container 2xl:mx-auto">
          <div className="w-full px-6 py-12 lg:w-4/5 2xl:px-20">
            {/* Carousel for Small-Sized Screen */}
            <CarouselProvider
              className="relative block sm:hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={3}
              visibleSlides={1}
              step={1}
              infinite={true}
              isPlaying={true}
            >
              <div className="js-flickity flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute left-0 z-30 ml-8 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 md:h-14 md:w-14"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <Slider>
                  <Slide index={0}>
                    <div className="gallery-cell mr-6 h-full w-full sm:w-96 lg:mr-7 lg:w-1/2">
                      <div className="relative hidden h-full w-full lg:block">
                        <img
                          src="/images/terrace.jpg"
                          alt="terrace"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="relative h-full w-full lg:hidden">
                        <img
                          src="/images/terrace.jpg"
                          alt="terrace"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="gallery-cell mr-6 h-full w-full sm:w-96 lg:mr-7 lg:w-1/2">
                      <div className="relative hidden h-full w-full lg:block">
                        <img
                          src="/images/wall.jpg"
                          alt="wall"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="relative h-full w-full lg:hidden">
                        <img
                          src="/images/wall.jpg"
                          alt="wall"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="gallery-cell mr-6 h-full w-full sm:w-96 lg:mr-7 lg:w-1/2">
                      <div className="relative hidden h-full w-full lg:block">
                        <img
                          src="/images/kitchen.jpg"
                          alt="kitchen"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="relative h-full w-full lg:hidden">
                        <img
                          src="/images/kitchen.jpg"
                          alt="kitchen"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </Slide>
                </Slider>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute right-0 z-30 mr-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 md:h-14 md:w-14"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>

            {/* Carousel for Medium and Large-Sized Screen */}
            <CarouselProvider
              className="relative hidden sm:block"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={3}
              visibleSlides={1}
              step={1}
              infinite={true}
              isPlaying={true}
              currentSlide={1}
            >
              <div className="js-flickity flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute left-0 z-30 ml-8 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 md:h-14 md:w-14"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <Slider className="carousel__sliderLarge">
                  <Slide className="carousel__inner-slideLarge" index={0}>
                    <div className="gallery-cell h-full w-full">
                      <div className="relative hidden h-full w-full lg:block">
                        <img
                          src="/images/terrace.jpg"
                          alt="terrace"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="relative h-full w-full lg:hidden">
                        <img
                          src="/images/terrace.jpg"
                          alt="terrace"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </Slide>
                  <Slide className="carousel__inner-slideLarge" index={1}>
                    <div className="gallery-cell h-full w-full">
                      <div className="relative hidden h-full w-full lg:block">
                        <img
                          src="/images/wall.jpg"
                          alt="wall"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="relative h-full w-full lg:hidden">
                        <img
                          src="/images/wall.jpg"
                          alt="wall"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </Slide>
                  <Slide className="carousel__inner-slideLarge" index={2}>
                    <div className="gallery-cell h-full w-full">
                      <div className="relative hidden h-full w-full lg:block">
                        <img
                          src="/images/kitchen.jpg"
                          alt="kitchen"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="relative h-full w-full lg:hidden">
                        <img
                          src="/images/kitchen.jpg"
                          alt="kitchen"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </Slide>
                </Slider>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute right-0 z-30 mr-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 md:h-14 md:w-14"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>

          <style>
            {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
          </style>
        </div>
      </section>
    </Fragment>
  )
}

export default Header
