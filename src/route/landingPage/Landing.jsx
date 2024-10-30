import React from 'react'
import Card from '../../component/Card'
import { AiTwotoneThunderbolt } from 'react-icons/ai'
import { FaCarOn } from 'react-icons/fa6'

const Landing = () => {
  return (
    <div className=' m-4 flex gap-2 '>
      <Card
        name="reaction_time"
        display={"Reaction Time"}
        logo={<AiTwotoneThunderbolt
          className=' text-9xl text-blue-400 transition group-hover:text-red-400 ' />
        } />
      <Card
        name="customs_cars"
        display={"Custom Car Setup"}
        logo={<FaCarOn
          className=' text-9xl text-blue-400 transition group-hover:text-red-400 ' />
        } />
    </div>
  )
}

export default Landing