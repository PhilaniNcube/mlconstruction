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
            src="/images/wbho.png"
            alt="wbho"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/cidb.png"
            alt="cidb"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/bccei.png"
            alt="bccei"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/comp.jpg"
            alt="compensation fund"
            className="h-36 w-full object-contain"
          />
          <img
            src="/images/nhbrc.jpg"
            alt="nhbrc"
            className="h-36 w-full object-contain"
          />
        </div>
      </section>
    </Fragment>
  )
}

export default FAQ
