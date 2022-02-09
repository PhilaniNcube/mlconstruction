import React, { useState } from 'react'

const Contact = () => {
  const [message, setMessage] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')

  const sendMail = async (message, fullName, email, telephone) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, fullName, telephone, message }),
      })

      //if sucess do whatever you like, i.e toast notification
      alert('Email sent')
      console.log(response)
    } catch (error) {
      // toast error message. whatever you wish
      alert('There was error sending the email. You can contact us via telephone on 073 236 4162')
    }
  }

  return (
    <div className="container mx-auto pt-16">
      <div className="mt-2 lg:flex">
        <div className="rounded-tl rounded-tr bg-orange-600 py-16 lg:w-2/5 xl:w-2/5 xl:rounded-bl xl:rounded-tr-none">
          <div className="mx-auto px-8 xl:w-5/6 xl:px-0">
            <h1 className="pb-4 text-3xl font-bold text-white xl:text-4xl">
              Get in touch
            </h1>
            <p className="pb-8 text-xl font-normal leading-relaxed text-white lg:pr-4">
              Got a question about us? Are you interested in partnering with us?
              Have some suggestions or just want to say Hi? Just contact us. We
              are here to asset you.
            </p>
            <div className="flex items-baseline pb-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone-call"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="pl-4 text-base text-white">073 236 4162</p>
                <p className="pl-4 text-base text-white">086 764 8963</p>
              </div>
            </div>
            <div className="flex items-baseline">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#FFFFFF"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={5} width={18} height={14} rx={2} />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="pl-4 text-base text-white">
                  maslutrading@gmail.com
                </p>
                <p className="pl-4 text-base text-white">info@maslu.co.za</p>
              </div>
            </div>
            <p className="pt-10 text-lg tracking-wide text-white">
              32 Mhlope Avenue, Sunnyridge <br />
              East London, 206
            </p>
          </div>
        </div>
        <div className="h-full rounded-tr rounded-br bg-orange-600 pt-5 pb-5 lg:w-3/5 xl:w-3/5 xl:pr-5 xl:pl-0">
          <form
            id="contact"
            className="rounded-tr rounded-br bg-white py-4 px-8"
            onSubmit={sendMail}
          >
            <h1 className="mb-6 text-4xl font-extrabold text-gray-800">
              Enter Details
            </h1>
            <div className="mb-6 block w-full flex-wrap justify-between xl:flex">
              <div className="mb-6 w-2/4 max-w-xs xl:mb-0">
                <div className="flex flex-col">
                  <label
                    htmlFor="full_name"
                    className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    id="full_name"
                    name="full_name"
                    type="text"
                    className="flex h-10 w-64 items-center rounded border border-gray-300 pl-3 text-sm font-normal focus:border focus:border-indigo-700 focus:outline-none"
                    placeholder
                  />
                </div>
              </div>
              <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    className="flex h-10 w-64 items-center rounded border border-gray-300 pl-3 text-sm font-normal focus:border focus:border-indigo-700 focus:outline-none"
                    placeholder
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap">
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
                  >
                    Phone
                  </label>
                  <input
                    required
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    id="phone"
                    name="phone"
                    type="tel"
                    className="flex h-10 w-64 items-center rounded border border-gray-300 pl-3 text-sm font-normal focus:border focus:border-indigo-700 focus:outline-none"
                    placeholder
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 w-full">
              <div className="flex flex-col">
                <label
                  className="mb-2 text-sm font-semibold text-gray-800"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  placeholder
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  className="mb-4 resize-none rounded border border-gray-300 py-2 px-3 text-sm outline-none focus:border focus:border-indigo-700"
                  rows={8}
                  id="message"
                  defaultValue={''}
                />
              </div>
              <button
                type="submit"
                className="rounded bg-orange-600 px-8 py-3 text-sm leading-6 text-white transition duration-150 ease-in-out hover:bg-orange-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
