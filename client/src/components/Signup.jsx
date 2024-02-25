import {AiFilEyeInvisible, AiFillEye} from 'react-icons/ai'
import { useState } from 'react';

function Signup({data, setData}) {
  const [passwordEye, setPasswordEye] = useState(false)
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false)


  // Handle Password Eye
  const handlePassword = () => {
    setPasswordEye(!passwordEye)
  }

  // Handle ConfirmPassword Eye
  const handleConfirmPassword = () => {
    setConfirmPasswordEye(!confirmPasswordEye)
  }




  return (
    <div className='space-y-6'>

      {/* Username Section */}
      <div className='mt-1'>
        <label className='block text-sm font-medium text-gray-700'>Username</label>
        <input 
        onChange={(e) => setData({...data, username: e.target.value})}
        value={data.username}
        type='text'
        id='username' className='block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 sm:text-sm'/>
      </div>

      {/* Email Section */}
      <div className='mt-1'>
        <label className='block text-sm font-medium text-gray-700'>Email</label>
        <input
        onChange={(e) => setData({...data, email: e.target.value})}
        value={data.email}
        type='email' id='email' className='block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 sm:text-sm'/>
      </div>

      {/* Password Section */}
      <div className='mt-1 relative'>
        <label className='block text-sm font-medium text-gray-700'>Password</label>
        <input 
        onChange={(e) => setData({...data, password: e.target.value})}
        value={data.password}
        type='password' id='password' className='block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 sm:text-sm'/>
        <div>
          <AiFilEyeInvisible />
        </div>
      </div>

      {/* Confirm Password Section */}
      <div className='mt-1 relative'>
        <label className='block text-sm font-medium text-gray-700'>Confirm Password</label>
        <input 
        onChange={(e) => setData({...data, confirmPassword: e.target.value})}
        value={data.confirmPassword}
        type='password' id='cpassword' className='block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 sm:text-sm'/>
      </div>
    </div>
  )
}

export default Signup