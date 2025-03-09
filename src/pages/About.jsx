import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import margherita from"../assets/makingpizza.jpeg"
export const About = () => {
  return (
    <div className=''>
      <div className='h-60 w-full object-cover bg-no-repeat bg-center bg-cover' style={{backgroundImage:`url(${MultiplePizzas})`}}></div>
      <div className='flex gap-5 px-30   justify-center items-center'>
      <div className='h-80 w-full mt-5  object-end bg-no-repeat bg-center bg-cover' style={{backgroundImage:`url(${margherita})`}}></div>
        <div>
        <h1 className='text-center text-6xl pb-4 '>ABOUT US</h1>
        <p className='text-center text-gray-400'>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo, quo doloremque?
          Non sed doloremque corrupti natus iusto!
          Expedita quod nostrum fuga iure sunt, accusantium
          eaque, obcaecati temporibus impedit blanditiis ratione ab maiores
          incidunt nisi! Repellat veritatis possimus dolores numquam eaque
          consequatur doloremque quod. Qui sit eius tenetur, quod nostrum necessitatibus?
        </p>
        </div>
      </div>
    </div>
  )
}

