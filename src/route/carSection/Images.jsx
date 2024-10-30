import React from 'react'
import sideView_defaultImage from './CarAssets/sideView_default.jpg'
import sideView_1Image from './CarAssets/sideView_1.jpg'
import sideView_2Image from './CarAssets/sideView_2.jpg'

const Images = ({index}) => {
    const style='rounded-md h-full w-full'
  return (
    <>
        {{
            0:<img className={style} src={sideView_defaultImage} alt='' />,
            1:<img className={style} src={sideView_1Image} alt='' />,
            2:<img className={style} src={sideView_2Image} alt='' />
        }[index]}
    </>
  )
}

export default Images