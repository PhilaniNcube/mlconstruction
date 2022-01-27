import React, { Fragment } from 'react'

const FAQ = () => {
  return (
    <Fragment>
      <section className="bg-sky-900" id="faqs">
        <div className="mx-auto max-w-6xl py-16 text-white">
          <h2 className="text-3xl font-light uppercase  md:text-5xl">
            Affiliate <span className="font-bold">Associations</span>
          </h2>
          <p className="mt-2 text-sm">
            We take pride in our association with the following affiliates:
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-2 space-y-3 md:grid-cols-3 lg:grid-cols-5">
          <img
            src="/images/nyda.jpg"
            alt="nyda"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/buffalo.jpg"
            alt="buffalo"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/comp.jpg"
            alt="comp"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/ec.jpg"
            alt="ec"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/down.jpg"
            alt="down"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/wbho.jpg"
            alt="wbho"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/cidb.jpg"
            alt="cidb"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/nhbrc.jpg"
            alt="nhbrc"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/amathole.jpg"
            alt="amathole"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/kei.jpg"
            alt="kei"
            className="h-36 w-full object-contain"
          />
        </div>
      </section>
    </Fragment>
  )
}

export default FAQ
