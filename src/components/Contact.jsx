import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/ebece549-0ac4-4ba2-875f-8173e69d5ea7"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-stone-900 dark:border-white"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none border-stone-900 dark:border-white"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-3 bg-transparent border-2 rounded-md focus:outline-none border-stone-900 dark:border-white"
               />
               <button
                  type="submit"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-stone-400 hover:bg-stone-600"
               >
                  Work With Me
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;