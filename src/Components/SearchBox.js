import React from 'react'

const SearchBox = () => {
  return (
    <div>
      <input className='w-[20rem] border border-gray-400 rounded-tl-full rounded-bl-full p-2' type='text' placeholder='Search'/>
      <button className=' w-[4rem] p-2 border border-gray-400 rounded-tr-full rounded-br-full bg-gray-400'>🔍 </button>
    </div>
  )
}

export default SearchBox;