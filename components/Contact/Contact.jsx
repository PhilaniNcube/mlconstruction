import React, { useState } from 'react'

const Contact = () => {
  const [message, setMessage] = useState('')

  const sendMail = async (message) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ message }),
      })

      //if sucess do whatever you like, i.e toast notification
      alert('Email sent')
      console.log(response)
    } catch (error) {
      // toast error message. whatever you wish
      alert('There was error sending the email. Please call 083 295 6515')
    }
  }

  return (
    <section className="relative -z-10 flex h-screen flex-col">
      <div className="absolute bottom-16 left-20">
        <div className="min-h-[300px] min-w-[300px] bg-orange-600 px-6 py-4 text-white">
          <h3 className="text-3xl font-bold uppercase">Get In Touch</h3>
          <p className="mt-2 text-xs">
            32 Mhlophe Avenue, Sunnyridge, <br />
            East London, 5206
          </p>
          <p className="mt-2 text-xs">
            <span className="mr-6 font-bold">Cell</span>073 236 4162
          </p>
          <p className="mt-2 text-xs">
            <span className="mr-6 font-bold">Fax</span>086 764 8963
          </p>
          <p className="mt-2 flex text-xs">
            <span className="mr-3 font-bold">Email</span>
            <span className="flex flex-col">
              <small className="text-xs">maslutrading@gmail.com</small>
              <small className="text-xs">info@maslu.co.za</small>
            </span>
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMail(message)
            }}
          >
            <textarea
              type="text"
              className="mt-4 h-24 w-11/12 rounded-lg px-2 text-gray-500"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="mt-2 bg-sky-900 px-4 py-1">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="h-[100vh]">
        <img
          src="/images/hat.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}

export default Contact
