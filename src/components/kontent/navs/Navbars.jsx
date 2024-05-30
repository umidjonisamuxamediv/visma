import React, {useState,useEffect} from 'react'
import {  getDocs,collection } from "firebase/firestore";
import {db} from '../../../firebaseConfig'
import rasim from '../../../img/material-symbols_arrow-left-rounded.png'
import {Link} from 'react-router-dom'
const Navbars = () => {
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
    <div className='w-full bg-neutral-200 flex p-5 mt-5'>
      {conrtys.map((el)=>(
        <Link to='/' key={el.id}>{el.title}</Link>
      ))}
      <img className='mt-2 ml-3' src={rasim} alt=""  />
      {conrtys.map((el)=>(
        <Link to='новости'  className='ml-3'key={el.id}>{el.p}</Link>
      ))}
      <img className='mt-2 ml-3'  src={rasim} alt=""  />
      {conrtys.map((el)=>(
        <Link to='Заявка' className='ml-3' key={el.id}>{el.w}</Link>
      ))}
    </div>  
  )
}

export default Navbars
