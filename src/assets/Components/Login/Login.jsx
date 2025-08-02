import React, { use, useState } from 'react';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

  const [error, setError] = useState({
    emailError: "",
    passwordError: ""
  });


  function validateEmail(userEmail) {
    if (userEmail === "") {
      setError(prev => ({ ...prev, emailError: "Email cannot be empty." }));
      return false;
    }
    setError(prev => ({ ...prev, emailError: "" }));
    return true;
  }

  function validatePassword(userPassword) {
    if (userPassword === "") {
      setError(prev => ({ ...prev, passwordError: "Password cannot be empty." }));
      return false;
    }
    setError(prev => ({ ...prev, passwordError: "" }));
    return true;
  }


  const onEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };


  const handleLogin = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (email !== user.email) {
      setError(prev => ({ ...prev, emailError: "Invalid Email" }))
    } else if (password !== user.password) {
      setError(prev => ({ ...prev, passwordError: "Invalid Password" }))

    } else {
      alert("Login Successful");
    }
  };

  return (
    // Your UI and colors are preserved.
    <div className='h-screen flex justify-center items-center bg-gray-200'>
      <form className='bg-[#e0d3ffcd] border border-[#C2A6FF] rounded-[5px] w-full max-w-md p-2' onSubmit={handleLogin} noValidate>
        <h1 className='text-center text-[#28262C] font-bold text-3xl mt-4'>LOG IN</h1>
        <div className='px-5 my-5'>
          <div className='my-2'>
            <label htmlFor="email" className='block text-xl my-1 font-medium'>Email</label>
            {/* **FIX: Added value and onChange handler.** */}
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onEmailChange}
              autoComplete='off'
              className='w-full py-2 px-2 my-1 border border-[#C2A6FF] outline outline-[#6f2ff9] rounded-[5px] bg-white placeholder:font-light placeholder:text-sm'
              placeholder='enter your email'
            />
            {/* This part was already correct. */}
            {error.emailError && <span className='text-xs text-red-500'>{error.emailError}</span>}
          </div>
          <div className='my-2'>
            <label htmlFor="password" className='block text-xl my-1 font-medium'>Password</label>
            {/* **FIX: Added value and onChange handler.** */}
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              autoComplete='off'
              className='w-full py-2 px-2 my-1 border border-[#C2A6FF] outline outline-[#6f2ff9] rounded-[5px] bg-white placeholder:font-light placeholder:text-sm'
              placeholder='enter your password'
            />
            {/* **FIX: Replaced hardcoded message with dynamic error from state.** */}
            {error.passwordError && <span className='text-xs text-red-500'>{error.passwordError}</span>}
          </div>

          {/* **FIX: Added type="submit" to the button.** */}
          <button type="submit" className='block mx-auto p-2 bg-[#9565FF] w-full my-1 rounded-[5px] font-semibold text-white'>LOG IN</button>

          <p className='text-center text-sm mt-3 text-gray-800'>New to Shopper? <a href="#" className='text-[#6600FF]'>Sign Up</a></p>
        </div>
      </form>
    </div>
  );
}
