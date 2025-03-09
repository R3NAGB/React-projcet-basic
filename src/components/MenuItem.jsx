import React from 'react'

const MenuItem = ({ image, name, price }) => {
  return (
    <div className="menuItem bg-white shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-4 text-center">
        <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
        <p className="text-lg text-red-500 font-medium mt-2">${price}</p>
      </div>
    </div>

  )
}

export default MenuItem
