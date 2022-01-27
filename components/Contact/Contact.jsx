import React from 'react'

const Contact = () => {
  return (
    <section className="flex h-screen flex-col">
      <div className="h-[55vh]">
        <img
          src="/images/hat.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-1/2 bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3344.6517617154263!2d27.85072864573849!3d-33.0393039136881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s32%20Mhlophe%20Avenue%2C%20Sunnyridge%2C%20East%20London%2C%205206!5e0!3m2!1sen!2sza!4v1643301851037!5m2!1sen!2sza"
          loading="lazy"
          className="h-full w-full"
        ></iframe>
        <div className="absolute -top-16 left-20">
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
                <small className="text-xs">info@mlconstruction.co.za</small>
              </span>
            </p>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="apikey"
                value="YOUR_ACCESS_KEY_HERE"
              ></input>
              <input type="checkbox" name="botcheck" className="hidden"></input>
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              ></input>
              <input
                type="hidden"
                name="subject"
                value="New Submission from Contact Us Page"
              ></input>
              <textarea
                type="text"
                className="mt-4 h-24 w-11/12 rounded-lg px-2 text-gray-500"
                placeholder="message"
              ></textarea>
              <button type="submit" className="mt-2 bg-sky-900 px-4 py-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
