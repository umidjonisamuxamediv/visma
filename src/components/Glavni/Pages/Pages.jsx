import React,{useState,useEffect} from 'react'
import rasim from '../../../img/Rectangle 23.png'
import {db} from '../../../firebaseConfig'
import { getDocs,collection } from "firebase/firestore";
import rasim1 from '../../../img/Group 7(2).png'

const Pages = () => {
  const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'glavni1')
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
    <div className=' '>
      <img className='mt-5 mb-5' src={rasim} alt="" />
      <div className='flex justify-center'>
      <div className='absolute flex flex-row top-[10rem] w-[80%]'>
        <div className='flex flex-col mt-[6%] mr-[8%]'>
        {conrtys.map((el)=>(
            <div className='text-[50px] text-[#ffffff] mr-[10%]' key={el.id} value={el.title}>{el.title}</div>
        ))}
        {conrtys.map((el)=>(
            <div className='text-[#FFFFFF] mr-[30%]' key={el.id} value={el.div}>{el.div}</div>
        ))}
        
            <div className='flex mt-5' >
            {conrtys.map((el)=>(
              <div className='text-[#FFFFFF] text-[16px]'  key={el.id}>{el.botton}</div>
              ))}
              <img className='ml-2' src={rasim1} alt="" />
            </div>
       
          
        </div>
        <div className='flex flex-col '>
                <div className='flex flex-row'>
                  <div className='w-[306px] h-[250px] bg-[#5DB7DE] m-3 rounded-[20px]'>
                    {conrtys.map((el)=>(
                      <div className='p-5 text-[#FFFFFF] ' >
                       <div key={el.id}>
                          {el.p}
                       </div>
                       <div className='h-full mt-[136px] text-[19px]' key={el.id}>
                          {el.h1}
                       </div>
                      </div>
                      
                    ))}
                  </div>
                  <div className='w-[306px] h-[250px] bg-[#5DB7DE] m-3 rounded-[20px]'>
                    {conrtys.map((el)=>(
                      <div className='p-5 text-[#FFFFFF] ' >
                       <div key={el.id}>
                          {el.p}
                       </div>
                       <div className='h-full mt-[135px] mr-[60%] text-[19px]' key={el.id}>
                          {el.h2}
                       </div>
                      </div>
                      
                    ))}
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='w-[306px] h-[250px] bg-[#5DB7DE] m-3 rounded-[20px]'>
                    {conrtys.map((el)=>(
                      <div className='p-5 text-[#FFFFFF] ' >
                       <div key={el.id}>
                          {el.p}
                       </div>
                       <div className='h-full mt-[135px] mr-[60%] text-[19px]' key={el.id}>
                          {el.h3}
                       </div>
                      </div>
                      
                    ))}
                  </div>
                  <div className='w-[306px] h-[250px] bg-[#5DB7DE] m-3 rounded-[20px]'>
                    {conrtys.map((el)=>(
                      <div className='p-5 text-[#FFFFFF] ' >
                       <div key={el.id}>
                          {el.p}
                       </div>
                       <div className='h-full mt-[135px] mr-[60%] text-[19px]' key={el.id}>
                          {el.h4}
                       </div>
                      </div>
                      
                    ))}
                  </div>
                </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Pages
