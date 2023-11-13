import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Fourth = () => {
  return (
    <div className='grid flex-grid'>
        <h1 className='text-black ml-96 font-bold text-3xl'>Finally, all your work</h1>
        <h1 className='text-black ml-96 font-bold text-3xl'>in one place</h1>
        <div className='grid flex-grid'>
            <h1 className='flex flex-grid font-bold text-2xl text-black ml-72 mb-2'>Wikis</h1>
            <p className='text-xl text-black items-center justify-center mt-1 pr-1 w-56 ml-72' >It’s hard to move fast if you can’t find anything. Centralize all your knowledge in Notion.</p>
            <Link className='flex flex-grid text-base text-red-600 mr-6 mt-1 ml-72' href="/">Explorer→</Link>
        </div>
            <Image className='grid grid-item ml-96 -mt-36 pl-48 w-6/12' src='/engineering-wiki-V2.png' width={500} height={500} />
    </div>
  )
}

export default Fourth