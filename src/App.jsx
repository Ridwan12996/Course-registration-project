
import { useState } from 'react'
import './App.css'
import Cards from './Cards/Cards'
import Creditshr from './Credits/Creditshr'
import Header from './Header/Header'

function App() {
  const [creditshr, setcreditshr] =useState([])
  const [prices, setprices] =useState(0)
  const [credittime,setcredittime] = useState(0)
  const [Remainingtime, setremainingtime]= useState(0)
  
  const handleclick= card =>{
    const newcreditshr =[...creditshr, card]
    setcreditshr(newcreditshr)
setprices(prices+card.price)
setcredittime(credittime+ card.credit)
const total= 20
setremainingtime(total-Remainingtime)

  }
//   const Remaimingtimes = card =>{
//     const total= 20
// setremaimingtime(total-Remaimingtime)
//   }
  

  return (
    <>
   <Header></Header>
  <div className='m-7 flex gap-6 w-full md: w-full'>
  <Cards handleclick={handleclick}></Cards>
  
  <Creditshr  prices={prices} creditshr={creditshr} credittime={credittime} Remainingtime={Remainingtime}></Creditshr>
  </div>
    </>
  )
}

export default App
