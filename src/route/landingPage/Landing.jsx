import React from 'react'
import Card from '../../component/Card'
import { AiTwotoneThunderbolt } from 'react-icons/ai'

const Landing = () => {
  return (
    <div className=' m-4'>
      <Card
        name="reaction_time"
        display={"Reaction Time"}
        logo={<AiTwotoneThunderbolt
          className=' text-9xl text-blue-400 transition group-hover:text-red-400 ' />
        } />
    </div>
  )
}

export default Landing