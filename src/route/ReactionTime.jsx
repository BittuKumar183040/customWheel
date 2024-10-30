import { useState } from 'react'
import { AiTwotoneThunderbolt } from "react-icons/ai";

function ReactionTime() {
  const [start, setStart] = useState(0);
  let [timer, setTimer]=useState({
    initial:0,
    final:0,
    results:[],
    average:0
  })

  const handleClick=()=>{
    if(start===4)
      setStart(1)
    else{
      setStart(1)
      const waitScreen=setTimeout(()=>{
        setStart(2)
        timer.initial=new Date().getTime()
        clearTimeout(waitScreen)
      }, Math.floor(Math.random() * (2000 - 1000 + 1) + 1000))
    }
  }
  const handleQuick=()=>{
    setStart("soon")
  }
  const resume=()=>{
    reset()
  }
  const handleActive=()=>{
    let result = new Date().getTime()
    result = result - timer.initial
    timer.results.push(result)
    if(timer.results.length>4){
      setStart("result")
      timer.average = Math.ceil(timer.results.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)/4)
    }
    else{
      setStart(start+1)
    }
  }
  const reset = () =>{
    setStart(0);
    setTimer({
      initial:0,
      final:0,
      results:[],
      average:0
    })
  }

  return (
      <div className=' select-none text-white h-lvh'>
          {start === 0 &&
          <div onClick={handleClick} className=' bg-blue-400 text-center flex flex-col items-center justify-center h-full gap-4'>
            <AiTwotoneThunderbolt className=' text-9xl text-white opacity-60'/>
            <p className='text-7xl'>Reaction Time Text</p>
            <p className='text-xl'>When the red box turns green, click as quick as you can.</p>
            <p className='text-2xl'>Click anywhere to start</p>
          </div>}
          {start === 1 &&
          <div onClick={handleQuick} className='bg-red-400 text-center flex flex-col items-center justify-center h-full gap-4'>
            <p className='text-4xl'>o o o</p>
            <p className='text-4xl'>Wait for Green</p>
          </div>}
          {start === 2 &&
          <div onClick={handleActive} className='bg-green-400 text-center flex flex-col items-center justify-center h-full gap-4'>
            <p className='text-7xl'>CLICK!</p>
          </div>}
          {start === 3 &&
          <div onClick={handleClick} className='bg-red-400 text-center flex flex-col items-center justify-center h-full gap-4'>
            <p className='text-7xl'>{new Date().getTime() - timer.initial}</p>
            <p className='text-2xl'>Click to continue...</p>
          </div>}
          {start == "soon" &&
          <div onClick={resume} className='bg-blue-400 text-center flex flex-col items-center justify-center h-full gap-4'>
            <p className='text-7xl'>Too soon!</p>
            <p className='text-2xl'>Click to try again</p>
          </div>}
          {start == "result" &&
          <div className='bg-blue-600 text-center flex flex-col items-center justify-center gap-4 py-12'>
              <AiTwotoneThunderbolt className=' text-9xl text-white opacity-60'/>
            <div>
              <p className='text-2xl'>Reaction Time</p>
              <p className='text-8xl'>{timer.average}ms</p>
            </div>
            <p className='text-2xl'>This is your average score</p>
            <p onClick={reset} className='px-8 py-2 bg-blue-400 rounded-lg shadow-lg cursor-pointer mt-6'>Try Again</p>
          </div>}
      </div>
  )
}

export default ReactionTime