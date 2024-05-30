import React, {useState,useEffect} from 'react'
import {db} from '../../../firebaseConfig'
import { doc, getDocs,setDoc,collection } from "firebase/firestore";
const Fotter = () => {
    const [conrtyss,setContriyss]=useState([])
    const contryses = collection(db,'fotter2')
      useEffect(()=>{
        const setings =async()=>{
          const data = await getDocs(contryses)
          let array =[]
          data.forEach(doc=>{
            const dataDoc=doc.data()
            const fullDoc ={id: doc.id,  ...dataDoc}
            array.push(fullDoc)
            
          })
          setContriyss(array)
        }
        setings()
      },[])
  return (
    <div className='w-full bg-[#3D348B]   flex justify-center'>
    <div className='w-[70%] h-full flex m-5'>
    {conrtyss.map((el)=>(
        <div className='w-[100%] text-white  '>
         
            <div className='flex'  key={el.id} value={el.title}>{el.title}</div>
            <div key={el.id} value={el.div}>{el.div}</div>
            <div key={el.id} value={el.p}>{el.p}</div>
            <div key={el.id} value={el.h1}>{el.h1}</div>
          <div key={el.id} value={el.h2}>{el.h2}</div>
          <div key={el.id} value={el.h3}>{el.h3}</div>
          <div key={el.id} value={el.h4}>{el.h4}</div>
          <div key={el.id} value={el.h5}>{el.h5}</div>
        </div>
      ))}
    </div>
    
  </div>
  )
}

export default Fotter
