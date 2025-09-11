import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../lib/firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [error, setError] = useState({
        nameErrorMessage: "",
        emailErrorMessage: "",
        passwordErrorMessage: ""
    });

    // Navigate Context

    const navigate = useNavigate()



    function validateName(userName) {
        if (userName === "") {
            setError(prev => ({ ...prev, nameErrorMessage: "Name cannot be empty." }));
            return false;
        }
        if (userName.length < 3) {
            setError(prev => ({ ...prev, nameErrorMessage: "Name must be at least 3 characters." }));
            return false;
        }
        setError(prev => ({ ...prev, nameErrorMessage: "" }));
        return true;
    }

    function validateEmail(userEmail) {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (userEmail === "") {
            setError(prev => ({ ...prev, emailErrorMessage: "Email cannot be empty." }));
            return false;
        }
        if (!emailRegex.test(userEmail)) {
            setError(prev => ({ ...prev, emailErrorMessage: "Please enter a valid email." }));
            return false;
        }
        setError(prev => ({ ...prev, emailErrorMessage: "" }));
        return true;
    }

    function validatePassword(userPassword) {
        // **FIX 1 (Again): The regex pattern should NOT be in quotes.**
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;


        if (userPassword === "") {
            setError(prev => ({ ...prev, passwordErrorMessage: "Password cannot be empty." }));
            return false;
        }
        if (!passwordRegex.test(userPassword)) {
            setError(prev => ({ ...prev, passwordErrorMessage: "Password must be 8+ characters and include uppercase, lowercase, a number, and a special character." }));
            return false;
        }
        setError(prev => ({ ...prev, passwordErrorMessage: "" }));
        return true;
    }




    const onNameChange = (e) => {
        setName(e.target.value);
        validateName(e.target.value);
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const isNameValid = validateName(name);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (isNameValid && isEmailValid && isPasswordValid) {

            localStorage.setItem('user', JSON.stringify({ name, email, password }));
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password)


                console.log(user.displayName);

                await updateProfile(auth.currentUser, {
                    displayName: name
                })

                toast.success("Successfully Signed Up!")

                navigate('/products')
            } catch (error) {
                toast.error(error.message);
                console.log(error);
            }

        } else {
            console.log("Form has errors. Please correct them.");
        }
    };

    return (
        // Your UI and colors are preserved.
        <div className='h-screen flex justify-center items-center'>
            <form className='bg-[#e0d3ffcd] border border-[#C2A6FF] rounded-[5px] w-full max-w-md p-2' onSubmit={handleSubmit} noValidate>
                <h1 className='text-center text-[#28262C] font-bold text-3xl mt-4'>SIGN UP</h1>
                <div className='px-5 my-5'>
                    <div className='my-2'>
                        <label htmlFor="name" className='block text-xl my-1 font-medium'>Name</label>
                        <input type="text" name="name" id="name" value={name} className='w-full py-2 px-2 my-1 border border-[#C2A6FF] bg-white outline outline-[#6f2ff9] rounded-[5px] placeholder:font-light placeholder:text-sm' placeholder='enter your name' onChange={onNameChange} />

                        {error.nameErrorMessage && <span className='text-xs text-red-500'>{error.nameErrorMessage}</span>}
                    </div>
                    <div className='my-2'>
                        <label htmlFor="email" className='block text-xl my-1 font-medium'>Email</label>
                        <input type="email" name="email" id="email" value={email} className='w-full py-2 px-2 my-1 border border-[#C2A6FF] bg-white outline outline-[#6f2ff9] rounded-[5px] placeholder:font-light placeholder:text-sm' placeholder='enter your email' onChange={onEmailChange} />

                        {error.emailErrorMessage && <span className='text-xs text-red-500'>{error.emailErrorMessage}</span>}
                    </div>
                    <div className='my-2'>
                        <label htmlFor="password" className='block text-xl my-1 font-medium'>Password</label>
                        <input type="password" name="password" id="password" value={password} className='w-full py-2 px-2 my-1 border border-[#C2A6FF] bg-white outline outline-[#6f2ff9] rounded-[5px] placeholder:font-light placeholder:text-sm' placeholder='enter your password' onChange={onPasswordChange} />

                        {error.passwordErrorMessage && <span className='text-xs text-red-500'>{error.passwordErrorMessage}</span>}
                    </div>

                    <button type="submit" className='block mx-auto p-2 bg-[#9565FF] w-full my-1 rounded-[5px] font-semibold text-white'>SIGN UP</button>

                    <p className='text-center text-sm mt-3 text-gray-800'>Already have an account? <a href="#" className='text-[#6600FF]' onClick={() => navigate('/login')}>login</a></p>
                </div>
            </form>
        </div>
    );
}


export default SignUp