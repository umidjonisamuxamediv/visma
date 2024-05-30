import React from 'react'
import {  getDocs,collection } from "firebase/firestore";
import { useState,useEffect } from 'react'
import {db} from '../../firebaseConfig'
import rasim4 from '../../img/Vector(18).png'
import rasim1 from '../../img/ic_baseline-phone.png'
import rasim2 from '../../img/Vector(19).png'
import rasim3 from '../../img/Vector(21).png'
import Fotter from './fotter/Fotter';

const Footer = () => {
    const [conrtys,setContriys]=useState([])
  const contryses = collection(db,'fotter')
    useEffect(()=>{
      const setings =async()=>{
        const data = await getDocs(contryses)
        let array =[]
        data.forEach(doc=>{
          const dataDoc=doc.data()
          const fullDoc ={id: doc.id,  ...dataDoc}
          array.push(fullDoc)
          
        })
        setContriys(array)
      }
      setings()
    },[])
  return (
    <div className='w-full '>
        <div className='bg-[#3D348B] w-full flex justify-center '>
      <div className='w-[80%] h-[5rem] flex justify-around items-center text-[#FFFFFF]'>
        <div className='flex ml-2 ' >
               <img src={rasim4}/>
               {conrtys.map((el)=>(
        <div className='ml-2' key={el.id} value={el.title}>{el.title}</div>
        ))}
               
            </div>
            <div >
               <img className='bg-white-100' src={rasim3}  />
            </div>
            <div className='flex'>
                <img src={rasim1}/>
                {conrtys.map((el)=>(
        <div className='ml-2' key={el.id} value={el.number}>{el.number}</div>
        ))}
            </div>
            <div className='flex'>
                <img src={rasim2}/>
                {conrtys.map((el)=>(
        <div className='ml-2' key={el.id} value={el.gmail}>{el.gmail}</div>
        ))}
            </div>
        </div>
        
      </div>
      <Fotter/>
      <div className='w-full h-[2rem] bg-[#3D348B]   flex justify-center text-[#FFFFFF]'>
      {conrtys.map((el)=>(
        <div key={el.id} value={el.h}>{el.h}</div>
      ))}
      </div>
    </div>
  )
}

export default Footer
