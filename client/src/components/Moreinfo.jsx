import React from 'react'

function Moreinfo({data, setData}) {
  return (
    <div className='space-y-6'>
    {/* Phone Number Section */}
    <div className='mt-1'>
      <label className='block text-sm font-medium text-gray-700'>Phone Number</label>
      <input 
      onChange={(e) => setData({...data, phone: e.target.value})}
      value={data.phone}
      type='text' id='phoneNumber' className='block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 sm:text-sm'/>
    </div>
    {/* Favourite Course Section */}
    <div className='mt-1'>
      <label className='block text-sm font-medium text-gray-700'>Favourite Course</label>
      <input 
      onChange={(e) => setData({...data, course: e.target.value})}
      value={data.course}
      type='text' id='favouriteCourse' className='block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 sm:text-sm'/>
    </div>
  
  
  </div>
  )
}

export default Moreinfo