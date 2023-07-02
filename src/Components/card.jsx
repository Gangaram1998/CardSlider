import React from 'react'

const Card = ({name,image,description,company}) => {
    

  return (
    <div className='w-full sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-3/12 flex flex-col h-full rounded-2xl shadow-xl p-5  text-start relative flex-shrink-0  bg-yellow-100' >
        <img class='object-cover h-1/2 rounded-t-xl w-full'  src={image} alt={name}/>
        <h2 class='text-xl font-[600] text-blue-400'>{name}</h2>
        <h2 class='text-md font-[600] text-red-500'>{company}</h2>
        <p>{description}</p>
        <button class='px-10 rounded-2xl text-white self-center py-2 bg-green-600 mt-2' >See</button>
    </div>
  )
}

export default Card