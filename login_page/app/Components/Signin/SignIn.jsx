import React from 'react'
import SocialBtn from './socialBtn'
import TextField from './TextField'
import SignBtn from './SignBtn'

const SignIn = () => {
  return (

    <div className="flex flex-col justify-between items-center">

        <div className='text-5xl mb-3 font-bold'>
            Login in
        </div>

        <div className='mb-2 '>
        <SocialBtn/>
        </div>

        <div className='text-sm m-0 pd-0'>
            or use your account
        </div>

        <div>
            <div className="flex flex-col justify-around mt-0 gap-2">

                <TextField placeholder="Email" types="text"/>

                <TextField placeholder="Password" types="password"/>

            </div>
        </div>

        <div className='mt-5'>
            <a>Forgot your password?</a>
        </div>

        <div className='mt-2'>
        <SignBtn texts="login"/>     
        </div>




    </div>
  )
}

export default SignIn