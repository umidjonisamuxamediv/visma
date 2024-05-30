import React, {useEffect,useState} from 'react'
import {  getDocs,collection } from "firebase/firestore";
import {db} from '../../../firebaseConfig'
const Prosim = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'zayafka')
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
    <div className='w-full flex justify-center'>
      <div className='w-[60%]'>
      <div>
      {conrtys.map((el)=>(
                    <label className='font-bold text-[27px] mb-5'  key={el.id} >{el.pomoshiniy}</label>
                ))}
      </div>
      <div className='flex items-center'>
        <input type="checkbox" />
        {conrtys.map((el)=>(
                    <label className='ml-2 mb-2'  key={el.id} >{el.prr}</label>
                ))}
      </div>
      <div className='flex items-center'>
        <input type="checkbox" />
        {conrtys.map((el)=>(
                    <label className='ml-2 mb-2'  key={el.id} >{el.texnologiya}</label>
                ))}
      </div>
      <div className='flex items-center'>
        <input type="checkbox" />
        {conrtys.map((el)=>(
                    <label className='ml-2 mb-2'  key={el.id} >{el.xraneniya}</label>
                ))}
      </div>
      <div className='flex items-center'>
        <input type="checkbox" />
        {conrtys.map((el)=>(
                    <label className='ml-2 mb-2'  key={el.id} >{el.vozmojnesst}</label>
                ))}
      </div>
      </div>
    </div>
  )
}

export default Prosim
