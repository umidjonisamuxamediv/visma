import React,{useState,useEffect,useRef} from 'react'
import {  getDocs,collection } from "firebase/firestore";
import {db} from '../../../firebaseConfig'
import { useReactToPrint } from 'react-to-print';
const Usluge = () => {
    const [conrtys,setContriys]=useState([])
    
    const componentPDF=useRef()
    const contryses = collection(db,'usluge')
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

    const generatePDF=useReactToPrint({
        content:()=>componentPDF.current,
        documentTitle:"Userdata",
        onAfterPrint:()=>alert("Data saved in PDF")
    })
  return (
    <div className='w-[70%] flex ml-[15%] flex-row m-5'>
        <div ref={componentPDF} className='w-full flex '>
        <div className=' flex flex-col mt-[10%] '>
            {conrtys.map((el)=>(
                <div className='text-[40px] mb-[9%]' key={el.id}>{el.u}</div>
            ))}
            <div className=' flex mt-5 '>
                {conrtys.map((el)=>(
                    <div className='text-[#3D348B]  ' key={el.id}>{el.p}</div>
                ))}
                <button onClick={generatePDF} className='ml-2 bg-[#5DB7DE] w-[105px] h-[34px] text-white rounded-[10px] '>PDF</button>
            </div>
            <div className='flex mt-5 '>
                {conrtys.map((el)=>(
                    <div className='text-[#3D348B] ' key={el.id}>{el.d}</div>
                ))}
                <button onClick={generatePDF} className='ml-3  bg-[#5DB7DE] w-[70px] h-[34px] text-white rounded-[10px] '>PDF</button>
            </div >
            <div className='flex mt-5'>
                {conrtys.map((el)=>(
                    <div className='text-[#3D348B]' key={el.id}>{el.h}</div>
                ))}
                <button onClick={generatePDF} className='ml-5 bg-[#5DB7DE] w-[46px] h-[34px] text-white rounded-[10px] '>PDF</button>
            </div>
        </div>
        <div className='flex flex-col ml-5 text-white'>
            <div className='flex flex-row '>
                    <div className='w-[416px] h-[223px] rounded-[20px] bg-[#3D348B] m-5'>
                        {conrtys.map((el)=>(
                            <div className='m-5' >
                                <div key={el.id}>{el.title}</div>
                                <div className='mt-[135px]' key={el.id}>{el.h1}</div>
                            </div>


                        ))}
                    </div>
                    <div className='w-[416px] h-[223px] rounded-[20px] bg-[#3D348B] m-5'>
                        {conrtys.map((el)=>(
                            <div className='m-5' >
                                <div key={el.id}>{el.title}</div>
                                <div className='mt-[135px]' key={el.id}>{el.h2}</div>
                            </div>


                        ))}
                    </div>
            </div>
            <div className='flex flex-row '>
                    <div className='w-[416px] h-[223px] rounded-[20px] bg-[#3D348B] m-5'>
                        {conrtys.map((el)=>(
                            <div className='m-5' >
                                <div key={el.id}>{el.title}</div>
                                <div className='mt-[135px]' key={el.id}>{el.h3}</div>
                            </div>


                        ))}
                    </div>
                    <div className='w-[416px] h-[223px] rounded-[20px] bg-[#3D348B] m-5'>
                        {conrtys.map((el)=>(
                            <div className='m-5' >
                                <div key={el.id}>{el.title}</div>
                                <div className='mt-[135px]' key={el.id}>{el.h4}</div>
                            </div>


                        ))}
                    </div>
            </div>
            <div className='flex flex-row '>
                    <div className='w-[416px] h-[223px] rounded-[20px] bg-[#3D348B] m-5'>
                       {conrtys.map((el)=>(
                        <div className='m-5' >
                            <div key={el.id}>{el.title}</div>
                            <div className='mt-[135px]' key={el.id}>{el.h5}</div>
                        </div>

                       ))}
                    </div>
                    <div className='w-[416px] h-[223px] rounded-[20px] bg-[#3D348B] m-5'>
                        {conrtys.map((el)=>(
                            <div className='m-5' >
                                <div key={el.id}>{el.title}</div>
                                <div className='mt-[135px]' key={el.id}>{el.h6}</div>
                            </div>


                        ))}
                    </div>
            </div>
        </div>
        </div>
    </div>  
  )
}

export default Usluge
