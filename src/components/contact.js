import React from 'react'

export default function Contact() {
    return (
        <div class="w-full py-12">
            <h2 className="text-xl font-bold text-center">Contact Me</h2>
            <p className="text-center text-sm mt-1 text-gray-600">Feel free to get touch with me</p>
            <form class="p-8 mb-4">
                <div class="mb-4">
                    <input class="shadow-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none text-sm" id="fullname" type="text" placeholder="Full Name"/>
                </div>

                <div class="mb-4">
                    <input class="shadow-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none text-sm" id="email" type="email" placeholder="Email"/>
                </div>

                <div class="mb-4">
                    <textarea class="shadow-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none text-sm" id="message" placeholder="Message" rows="6"></textarea>
                </div>


                <button class="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-2 rounded" type="button">
                    Submit
                </button>

            </form>
        </div>
    )
}
