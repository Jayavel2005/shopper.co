import React from 'react'


const SignUp = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <form className='bg-sky-300 w-xl h-40'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" autoComplete='off' />
                    <span></span>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" autoComplete='off' />
                    <span></span>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password    " autoComplete='off' />
                    <span></span>
                </div>
            </form>
        </div>
    )
}

export default SignUp
