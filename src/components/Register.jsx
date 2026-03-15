import React from 'react'

const Register = ({setToggle}) => {
    console.log(setToggle)
  return (
   <form >
     <div className='h-135 w-110 rounded-2xl bg-[#fff] px-10 py-10 shadow-xl'>
      <div className='h-[100%] w-[100%]'>
          <h1 className='text-center font-bold text-3xl'>Create account</h1>
        <p className='text-center text-[14px]  text-gray-500 py-2'>Join us today</p>
        <div className=''>
           <div className='mt-5'>
             <h3 className='text-sm font-medium text-[#314158]'>Full Name</h3>
            <input type="text" placeholder='John Doe' required  className='my-2 bg-[#FAFBFD] w-full py-3 px-4 text-sm rounded-xl outline-gray-400 border-1 border-gray-300' />
           </div>
           <div className='mt-3'>
             <h3 className='text-sm font-medium text-[#314158]'>Email</h3>
            <input type="text" placeholder='you@example.com' required  className='my-2 bg-[#FAFBFD] w-full py-3 px-4 text-sm rounded-xl outline-gray-400 border-1 border-gray-300' />
           </div>
           <div className='mt-3'>
             <h3 className='text-sm font-medium text-[#314158]'>Password</h3>
            <input type="password" placeholder='password' required  className='my-2 bg-[#FAFBFD] w-full py-3 px-4 text-sm rounded-xl outline-gray-400 border-1 border-gray-300' />
           </div>

        </div>
        <button className=' mt-3 w-full bg-black text-white py-3 text-sm font-medium rounded-xl active:scale-98 cursor-pointer'>Sign up</button>
        <h5 className='text-center mt-6 text-sm text-gray-500'>Already have an account? <a className="text-black font-medium"
        href='#' onClick={()=>setToggle(true)} >Sign in</a></h5>
      </div>

 

    </div>
   </form>
  )
}

export default Register
