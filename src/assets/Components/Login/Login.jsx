import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../../lib/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ emailError: "", passwordError: "" });
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const { setUser } = useContext(AuthContext);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google user:", user.displayName, user.email);
      navigate("/products");
      toast.success(`Welcome, ${user.displayName || "User"} 👋`);
    } catch (error) {
      console.error("Google Sign-in error:", error);
      toast.error("Google Sign-in failed");
    }
  };

  const validateEmail = (userEmail) => {
    if (userEmail === "") {
      setError((prev) => ({ ...prev, emailError: "Email cannot be empty." }));
      return false;
    }
    setError((prev) => ({ ...prev, emailError: "" }));
    return true;
  };

  const validatePassword = (userPassword) => {
    if (userPassword === "") {
      setError((prev) => ({ ...prev, passwordError: "Password cannot be empty." }));
      return false;
    }
    setError((prev) => ({ ...prev, passwordError: "" }));
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) return;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        navigate("/products");
        toast.success("User logged in successfully.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white shadow-lg border border-gray-200 rounded-xl w-full max-w-md p-6">
        <h1 className="text-center text-gray-900 font-bold text-3xl mb-6">
          Log In
        </h1>

        <form onSubmit={handleLogin} className="space-y-4" noValidate>
          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); validateEmail(e.target.value); }}
              autoComplete="off"
              className="w-full py-2 px-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
            {error.emailError && <span className="text-xs text-red-500">{error.emailError}</span>}
          </div>

          {/* Password input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value); }}
              autoComplete="off"
              className="w-full py-2 px-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
            {error.passwordError && <span className="text-xs text-red-500">{error.passwordError}</span>}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-sm text-gray-500">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Sign In button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 flex items-center justify-center gap-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
        >
          <i className="bi bi-google"></i> Sign in with Google
        </button>

        <p className="text-center text-sm mt-6 text-gray-700">
          New to Nile.co?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
