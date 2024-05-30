import React,{useEffect,useState}  from 'react'
import {  getDocs,collection } from "firebase/firestore";
import {db} from "../../../firebaseConfig"
                            
import rasim from '../../../img/Rectangle 33.png'
import rasim1 from '../../../img/Vector(22).png'
const Komponiyo = () => {
    const [conrtys,setContriys]=useState([])
    

    const contryses = collection(db,'komponiya')
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
    <div className='w-full bg-zinc-200 flex justify-center'>
        <div className='w-[80%] flex flex-row m-5'>
            <div className='w-[50%] '>
                {conrtys.map((el)=>(
                    <div className='mr-[10%]' >
                        <div className='text-[40px] mb-5 ' key={el.id}>{el.title}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.p}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h3}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h3}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h2}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h3}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h3}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h4}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h3}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h3}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h3}</div>
                        <div className='text-[16px] mb-2 mr-5' key={el.id}>{el.h3}</div>
                    </div>
                ))}
            </div>
            <div className='mt-[7%]'>
                   <div className=' '>
                    <img  src={rasim} alt="" />
                    <img className='absolute top-[214%] right-[33%]' src={rasim1} alt="" />
                   </div>
                   <div>
                    
                        <div className='w-[526px] h-[170px] rounded-[20px] bg-[#5DB7DE] text-white p-5 mt-5 '>
                        {conrtys.map((el)=>(
                            <div className='' key={el.id}>{el.div}</div>
                            ))}
                        {conrtys.map((el)=>(
                            <div className='mt-[60px]' key={el.id}>{el.r}</div>
                            ))}
                        </div>
                    
                   </div>
            </div>
        </div>
    </div>
  )
}

export default Komponiyo
