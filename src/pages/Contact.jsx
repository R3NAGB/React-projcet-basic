import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg";
export const Contact = () => {
  return (
    <section className='flex items-center px-8'>
    {/* Image Container */}
    <div 
      className='w-1/2 h-150 bg-center bg-cover object-center'
      style={{ backgroundImage: `url(${PizzaLeft})` }}
    ></div>
  
    {/* Form Section */}
    <div className='w-1/2'>
      <h1 className='text-center text-3xl font-bold mb-6'>Contact Us</h1>
      <form id="contact-form" method="POST" className="max-w-lg w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter full name..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter email..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter message..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
  
  )
}

