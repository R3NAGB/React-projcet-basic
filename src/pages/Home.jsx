import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg"
const Home = () => {
  return (
    <div className='w-full h-155 bg-cover bg-center bg-no-repeat 
      flex pt-50' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='px-30 flex flex-col text-center '>
        <h1 className='font-bold text-8xl text-amber-800 '> Pedro's <span className='text-[#b7950b]'> Pizzeria</span> </h1>
        <p className='text-3xl  text-[#7d6608] pt-5'> PIZZA TO FIT ANY TASTE</p>
        <Link className='pt-5' to="/menu">
          <button className='text-white bg-[#873e09] hover:bg-[#873e09]/90 
          focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50
          font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex
           items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2'
          > ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
