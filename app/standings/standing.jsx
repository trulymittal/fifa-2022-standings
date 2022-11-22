import React from 'react'
import TeamRow from './team-row'
import { orderBy } from 'lodash'

export default function StandingSection({ standing }) {
  const { _id, group, teams } = standing

  return (
    <div className='p-4 shadow bg-gray-50 rounded-lg '>
      <div className='grid grid-cols-7 text-xs'>
        <p className='font-bold col-span-2'>Group {group}</p>
        <p className='mx-auto'>Played</p>
        <p className='mx-auto'>Won</p>
        <p className='mx-auto'>Lost</p>
        <p className='mx-auto'>Draw</p>
        <p className='mx-auto'>Points</p>
      </div>
      <hr className='my-2' />
      {/* {teams.map(team => (
        <TeamRow team={team} key={team.name_en} />
      ))} */}
      {orderBy(teams, 'pts', 'desc').map(team => (
        <TeamRow team={team} key={team.name_en} />
      ))}
    </div>
  )
}
