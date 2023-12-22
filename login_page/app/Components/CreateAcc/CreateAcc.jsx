import React from 'react'
import SocialBtn from '../Signin/socialBtn'
import TextField from '../Signin/TextField'
import SignBtn from '../Signin/SignBtn'

const CreateAcc = () => {
  return (
    <div>

<div className="flex flex-col justify-between items-center">

<div className='text-5xl mb-3 text-center font-bold'>
    Create Account
</div>

<div className='mb-2 '>
<SocialBtn/>
</div>

<div className='text-sm m-0 pd-0'>
    or use your email for registration
</div>

<div>
    <div className="flex flex-col justify-around mt-0 gap-2">
        
        <TextField placeholder="Name" types="text"/>

        <TextField placeholder="Email" types="text"/>

        <TextField placeholder="Password" types="password"/>



    </div>
</div>



<div className='mt-2'>
<SignBtn texts="Sign Up"/>     
</div>

</div>
            

    </div>
  )
}

export default CreateAcc