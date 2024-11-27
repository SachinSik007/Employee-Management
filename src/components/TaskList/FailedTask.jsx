import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full  w-[300px] p-5 bg-red-600 rounded-xl'>
         <div className='flex justify-between items-center'>
            <h3 className='bg-yellow-600 text-sm px-3 py-1'>{data.category}</h3>
            <h4 className='font-sm'>{data.date}</h4>
         </div>
         <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
         <p className='text-sm mt-2'>
         {data.description}
         </p>
         <div className='mt-2'>
            <button className='w-full bg-black'>Failed</button>
         </div>
       </div>
  )
}

export default FailedTask