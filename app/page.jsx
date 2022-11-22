import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col items-center space-y-8'>
      <Image
        src='/2022_FIFA_World_Cup.svg'
        alt='FIFA WC 2022'
        height={200}
        width={400}
      />
      <Link href='/standings'>
        <button className='bg-red-700 hover:bg-red-600 px-3 py-2 rounded-md text-white font-bold uppercase'>
          Standings
        </button>
      </Link>
    </div>
  )
}
