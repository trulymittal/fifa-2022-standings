import { DateTime } from 'luxon'
import React from 'react'
import StandingSection from './standing'

export default async function StangingPage() {
  const response = await fetch('http://api.cup2022.ir/api/v1/standings', {
    headers: {
      authorization: process.env.API_KEY ?? '',
    },
    next: {
      revalidate: 10,
    },
  })

  const standings = (await response.json()).data

  return (
    <div>
      <p className='font-semibold text-sm mb-4 text-end text-gray-700 italic'>
        Last updated: {DateTime.now().toLocaleString(DateTime.DATETIME_MED)}
      </p>
      <div className='grid grid-cols-2 gap-4'>
        {standings.map(standing => (
          <StandingSection standing={standing} key={standing._id} />
        ))}
        {/* <pre>{JSON.stringify(standings, null, 2)}</pre> */}
      </div>
    </div>
  )
}
