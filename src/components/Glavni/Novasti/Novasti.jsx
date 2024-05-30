import React,{useState,useEffect} from 'react'
import {db} from '../../../firebaseConfig'
import {  getDocs,collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import rasim from '../../../img/Group 7(3).png'
import Card from './novasti2/Card';
import rasim1 from '../../../img/Rectangle 34.png'
import rasim2 from '../../../img/Rectangle 34(1).png'
import rasim3 from '../../../img/Rectangle 34(2).png'
import rasim4 from '../../../img/Rectangle 34(3).png'
const Novasti = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'novastiy')
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
    <div className='w-full   '>
      <div className=' ml-[10%] w-[80%] flex justify-between items-center'>
        <div >
        {conrtys.map((el)=>(
                <div className='text-[40px] font-bold' key={el.id}>{el.title}</div>
        ))}
        </div>
        <div className='flex h-[30px]'>
        {conrtys.map((el)=>(
                <Link to={'новости'} className='text-[#3D348B]' key={el.id}>{el.h1}</Link>
        ))}
        <img className='ml-2' src={rasim} alt="" />
        </div>
      </div>
      <div className=' mt-5 mb-5 ml-[10%] w-[80%] flex justify-around '>
        <div className='w-[50%]'>
          <img src={rasim1} alt="" width={260}/>
        {conrtys.map((el)=>(
            <Card
            
            numbers={el.number}
            textbold={el.l}
            text={el.p}
            />
        ))}
        </div>
        <div className='w-[50%] '>
          <img src={rasim2} alt="" width={260}/>
        {conrtys.map((el)=>(
            <Card
           
            numbers={el.nombers}
            textbold={el.Lf}
            text={el.pl}
            />
        ))}
        </div>
        <div className='w-[50%] '>
          <img src={rasim3} alt="" width={260}/>
        {conrtys.map((el)=>(
            <Card
           
            numbers={el.nomberse}
            textbold={el.li}
            text={el.pi}
            />
        ))}
        </div>
        <div className='w-[50%] '>
          <img src={rasim4} alt="" width={260}/>
        {conrtys.map((el)=>(
            <Card
           
            numbers={el.nombersm}
            textbold={el.lm}
            text={el.pm}
            />
        ))}
        </div>
        
      </div>
    </div>
  )
}

export default Novasti
