import React, {useState,useEffect} from 'react'
import rasim from '../../img/Vector(17).png'
import {  getDocs,collection,where,query ,getFirestore } from "firebase/firestore";
import {db} from '../../firebaseConfig'
import rsim1 from '../../img/ic_round-search.png'
import {useNavigate} from 'react-router-dom'
import { initializeApp } from "firebase/app";
const Navbar = () => {

  
  
    const [query, setQuery] = useState('');
    
    function handleSearch() {
      db.collection('your-collection-name').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setQuery(`${doc.id} => ${doc.data()}`);
          });
        })
        .catch((error) => {
          setQuery("Error getting documents: ", error);
        });
    }
    
    const [conrtys,setContriys]=useState([])
    const Navbar =['О компании','Новости',
     'Новости',
      'Новости',
     'Новости',
     'Новости',
      'Новости']
    const navigate = useNavigate()
    const handleTitleClik =(el)=>{
      navigate(el.toLowerCase())
    }
    const contryses = collection(db,'navbar')
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
    <div className='w-full  flex justify-around mt-5 items-center'>
    <img src={rasim} />
 <div className='flex '>
 {Navbar.map((el)=>(
    <div onClick={()=>handleTitleClik(el)} className='m-3 cursor-pointer'   >
        {el}
    </div>
 ))}
 </div>
 <div className='flex items-center'>
  <img src={rsim1} width={25} height={25} className=' mr-3'/>
  
  <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search items..."
        />
        <button type="submit">Search</button>
      </form>
 </div>
 
</div>
  )
}

export default Navbar
