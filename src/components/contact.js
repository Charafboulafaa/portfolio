import React, {useState} from 'react'
import emailjs, { send } from 'emailjs-com'

export default function Contact() {

    const [sent, setSent] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        

        emailjs.sendForm('gmail', 'template_jAwcnrOb', e.target, 'user_7IzoLXMyaSUwDsOy6qQkf')
        .then((result) => {
            setSent(true)
            
        }, (error) => {
            setSent(false)
        })

        e.target.reset()
    }


    return (
        <div id="contact" className="container mx-auto px-4 w-full py-12">
            <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
            <p className="text-center text-base mt-1 text-gray-600">Feel free to get in touch with me</p>
            <form className="p-8 mb-4 max-w-xl mx-auto" onSubmit={sendEmail}>
                <div className="mb-4">
                    <input className="shadow-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none text-sm" name="name" type="text" placeholder="Full Name" required/>
                </div>

                <div className="mb-4">
                    <input className="shadow-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none text-sm" name="email" type="email" placeholder="Email" required/>
                </div>

                <div className="mb-4">
                    <textarea className="shadow-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none text-sm" name="message" placeholder="Message" rows="6" required></textarea>
                </div>

                <button className="bg-blue-500 hover:bg-blue-600 text-white text-base py-1 px-3 rounded" type="submit">
                    Send
                </button>

                {sent &&
                    <div className="text-teal-500 text-sm font-semibold mt-4" role="alert">
                        <p>Email Sent Successfully :)</p>
                    </div>
                }
                {sent === false &&
                    <div className="text-red-500 text-sm font-semibold mt-4" role="alert">
                        <p>Something Went Wrong :(</p>
                    </div>
                }

            </form>

            
        </div>
    )
}
