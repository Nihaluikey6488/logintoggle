import  { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
 const [toggle, setToggle] = useState(false);

  return (
    <div className='flex justify-center items-center w-full h-screen py-5 text-xm  bg-[#F4F7FA]'>
      {toggle?<Login setToggle={setToggle}/>:<Register setToggle={setToggle}/>}

    </div>
  ) 
}

export default App
