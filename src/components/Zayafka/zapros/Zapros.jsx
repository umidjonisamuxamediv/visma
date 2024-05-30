import React, {useState,useEffect}  from 'react'
import {db} from '../../../firebaseConfig'
import {  getDocs,collection } from "firebase/firestore";
const Zapros = () => {
    const [user,setUser]=useState(
        {
            Наименованиегруза:'',
            Размерпартии:'',
            едизмерения:'',
            Направлениеперевозки:'',
            Пунктназначенияперевозки:'',
            Периодпоступлениягрузакперевалке:'',
            Грузпоступаетвпорт:'',
            Грузотправляетсяизпорта:'',
            Размерсудовойпартии:'',
            Опасностьгрузакласс:'',
            Дополнительнаяинформацияогрузе:'',
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
            Наименованиегруза,
            Размерпартии,
            едизмерения,
            Направлениеперевозки,
            Пунктназначенияперевозки,
            Периодпоступлениягрузакперевалке,
            Грузпоступаетвпорт,
            Грузотправляетсяизпорта,
            Размерсудовойпартии,
            Опасностьгрузакласс,
            Дополнительнаяинформацияогрузе,
        }=user;
        e.preventDefault();
        const options ={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Наименованиегруза,
                Размерпартии,
                едизмерения,
                Направлениеперевозки,
                Пунктназначенияперевозки,
                Периодпоступлениягрузакперевалке,
                Грузпоступаетвпорт,
                Грузотправляетсяизпорта,
                Размерсудовойпартии,
                Опасностьгрузакласс,
                Дополнительнаяинформацияогрузе, 
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
                    <div className='text-center mt-5 text-[40px] font-semibold' key={el.id} >{el.zayafka}</div>
                ))}
            <div className='flex justify-between mb-5'>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.title}</div>
                    ))}
                <input onChange={datas} name='Наименованиегруза' type={user.Наименованиегруза} autoComplete='off' required  className='w-[416px] border-solid border-2 border-neutral-200' />
                </div>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.razmer}</div>
                    ))}
                <input onChange={datas} name='Размерпартии' type={user.Размерпартии} autoComplete='off' required className='w-[416px]  border-solid border-2 border-neutral-200'  />
                </div>
            </div>
            <div className='flex justify-between mb-5'>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.p}</div>
                    ))}
                <input onChange={datas} name='едизмерения' type={user.едизмерения} autoComplete='off' required className='w-[416px] border-solid border-2 border-neutral-200' />
                </div>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.napravleniya}</div>
                    ))}
                <input onChange={datas} name='Направлениеперевозки' type={user.Направлениеперевозки} autoComplete='off' required className='w-[416px]  border-solid border-2 border-neutral-200' />
                </div>
            </div>
            <div className='flex justify-between mb-5'>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.punkt}</div>
                    ))}
                <input onChange={datas} name='Пунктназначенияперевозки' type={user.Пунктназначенияперевозки} autoComplete='off' required className='w-[416px] border-solid border-2 border-neutral-200'  />
                </div>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.period}</div>
                    ))}
                <input onChange={datas} name='Периодпоступлениягрузакперевалке' type={user.Периодпоступлениягрузакперевалке} autoComplete='off' required className='w-[416px]  border-solid border-2 border-neutral-200' />
                </div>
            </div>
            <div className='flex justify-between mb-5'>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.gruz}</div>
                    ))}
                <input onChange={datas} name='Грузпоступаетвпорт' type={user.Грузпоступаетвпорт} required autoComplete='off' className='w-[416px] border-solid border-2 border-neutral-200' />
                </div>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.otpravleno}</div>
                    ))}
                <input onChange={datas} name='Грузотправляетсяизпорта' type={user.Грузотправляетсяизпорта} required autoComplete='off' className='w-[416px]  border-solid border-2 border-neutral-200'  />
                </div>
            </div>
            <div className='flex justify-between mb-5'>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.razmer}</div>
                    ))}
                <input onChange={datas} name='Размерсудовойпартии' type={user.Размерсудовойпартии} required autoComplete='off' className='w-[416px] border-solid border-2 border-neutral-200'  />
                </div>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.opasniy}</div>
                    ))}
                <input onChange={datas} type={user.Опасностьгрузакласс} name='Опасностьгрузакласс' required autoComplete='off' className='w-[416px]  border-solid border-2 border-neutral-200'  />
                </div>
            </div>
            <div className='flex  mb-5'>
                <div>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.dopalneniya}</div>
                    ))}
                <textarea onChange={datas} type={user.Дополнительнаяинформацияогрузе} name='Дополнительнаяинформацияогрузе' required autoComplete='off' className='w-[416px] border-solid border-2 border-neutral-200'  ></textarea>
                </div>
                <div className='ml-[18%]'>
                    {conrtys.map((el)=>(
                        <div className='mb-5' key={el.id}>{el.button}</div>
                       
                    ))}
                        <button onClick={getDatas} className='bg-[#5DB7DE] w-[148px] h-[34px] rounded-[10px]' >выберите файл</button>
                </div>
            </div>
      </form>
    </div>
  )
}

export default Zapros
