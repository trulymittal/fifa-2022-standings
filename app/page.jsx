import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='text-4xl text-red-500'>
      <Link href='/standings'>
        <button className='bg-red-700 hover:bg-red-600 px-3 py-2 rounded-md text-white font-bold uppercase'>
          Standings
        </button>
      </Link>
    </div>
  )
}
