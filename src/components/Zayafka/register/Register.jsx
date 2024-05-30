import React, {useState,useEffect}  from 'react'
import {db} from '../../../firebaseConfig'
import {  getDocs,collection } from "firebase/firestore";
import rasim from '../../../img/Group 7(3).png'
const Register = () => {
    const [user,setUser]=useState(
        {
          users:'',
          number:'',
          gmail:'',
          text:'',
        }
    )
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
    let name,value
    const datas =(e)=>{
        name = e.target.name
        value = e.target.value
        setUser({...user,[name]: value});
    }
    const getDatas= async(e)=>{
        const  {
            users,
          number,
          gmail,
          text,
        }=user;
        e.preventDefault();
        const options ={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                users,
                number,
                gmail,
                text,
            })
        }
        const res = await fetch(
            'https://visma-528ae-default-rtdb.firebaseio.com/UserData.json',
            options
            )
            if (res){
                alert('Massage Sent')
            }
            else{
                alert('Error Occured')
            }
    }
  return (
    <div className='w-full flex justify-center'>
      <form className='w-[60%]' method='POST'>
      {conrtys.map((el)=>(
                    <div className=' mt-5 text-[27px] font-semibold' key={el.id} >{el.info}</div>
                ))}
            <div className='flex justify-between mb-5'>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.imya}</div>
                    ))}
                <input onChange={datas} name='users' type={user.users} autoComplete='off' required  className='w-[416px] border-solid border-2 border-neutral-200' />
                </div>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.komponiyo}</div>
                    ))}
                <input onChange={datas} name='text' type={user.text} autoComplete='off' required className='w-[416px]  border-solid border-2 border-neutral-200'  />
                </div>
            </div>
            <div className='flex justify-between mb-5'>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.tel}</div>
                    ))}
                <input onChange={datas} name='number' type={user.number} autoComplete='off' required className='w-[416px] border-solid border-2 border-neutral-200' />
                </div>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.gmail}</div>
                    ))}
                <input onChange={datas} name='gmail' type={user.gmail} autoComplete='off' required className='w-[416px]  border-solid border-2 border-neutral-200' />
                </div>
            </div>
            <div className='flex justify-center mb-5 text-[23px] w-full mt-5'>
                {conrtys.map((el)=>(
                    <button className='' onClick={getDatas} key={el.id}>{el.e}</button>
                ))}
                <img className='ml-2' src={rasim} alt=""   />
            </div>
                        
      </form>
    </div>
  )
}

export default Register

