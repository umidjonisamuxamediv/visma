import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[80%] mt-1'>
      <img className='w-full ' src={props.img} alt="" />
      <div className='text-[13px]'>{props.numbers}</div>
      <div className='tetx-[19px] font-bold'>{props.textbold}</div>
      <div className='text-[14px]'>{props.text}</div>
    </div>
  )
}

export default Card
