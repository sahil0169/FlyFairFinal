"use client"
import { useSearchParams } from 'next/navigation'
import {useState,useEffect} from 'react'
import Header from "components/Header"
import Side from "components/side"
import Login from '@/components/login'
import Cards from "components/cards"

function page() {
//   const searchParams = useSearchParams()
//   const [data, setData] = useState([])
//   let catFilter = "general"
//   if (searchParams.get("category")!= null) {
//     catFilter=searchParams.get("category")
//   }

      

//   useEffect(() => {
//     fetch('https://newsapi.org/v2/top-headlines?country=us&category='+catFilter+'&apiKey=ec4810ca37fd45728e97017e6fdba1b1')
//       .then((res) => res.json())
//       .then((data1) => {
//         setData(data1.articles)
//       })
//   }, [catFilter])

//   const cardss=data.map(item => {
//     return(
//   <Cards
//     key={item.id}
//     {...item}
//   />
//     )
// }) 
  
  return (
    <div >
    <img src='top.png'  className="top"/>
      <div className='bottom'>
        <img src='left.png' className="left" />
        <div><img src='logo.png' className="logo" />
        <Login/>
        </div>
        
    </div>
</div>
  )
}

export default page
{
  /* <Header /> */
}
      {/* { cardss} */}