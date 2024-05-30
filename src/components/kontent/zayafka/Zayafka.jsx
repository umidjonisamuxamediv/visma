import React, {useState,useEffect} from 'react'
import {db} from '../../../firebaseConfig'
import {  getDocs,collection } from "firebase/firestore";
const Zayafka = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'kontents')
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
    <div className='w-[60%] ml-[20%]'>
      {conrtys.map((el)=>(
        <div className='w-full'>
            <div className='text-center text-[40px] font-bold mb-5' key={el.id}>{el.zayafka}</div>
            <div className='text-[16px] ml-[5%] mb-5' key={el.id}>{el.dlya}</div>
            <div className='text-[16px] ml-[5%] mb-5' key={el.id}>{el.z}</div>
            <div className='text-[16px] ml-[5%] mb-5' key={el.id}>{el.h1}</div>
            <div className='text-[16px] ml-[5%] mb-2' key={el.id}>{el.h2}</div>
            <div className='text-[16px] ml-[5%] mb-2' key={el.id}>{el.h3}</div>
            <div className='text-[16px] ml-[5%] mb-2' key={el.id}>{el.h4}</div>
            <div className='text-[16px] ml-[5%] mb-2' key={el.id}>{el.h5}</div>
            <div className='text-[16px] ml-[5%] mb-2' key={el.id}>{el.h6}</div>
            <div className='text-[16px] ml-[5%] mb-2' key={el.id}>{el.h7}</div>
            <div className='text-[16px] ml-[5%] mb-2' key={el.id}>{el.h8}</div>
            <div className='text-[16px] ml-[5%] mb-2' key={el.id}>{el.h9}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.p1}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.p2}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.p3}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.p5}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.j1}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.j2}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.j3}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.j4}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.j5}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.j6}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.j7}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.j8}</div>
            <div className='text-[16px] ml-[5%] m-2' key={el.id}>{el.j9}</div>
        </div>
      ))}
    </div>
  )
}

export default Zayafka
