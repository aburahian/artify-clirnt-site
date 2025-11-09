import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hook/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {
  const { signInWithGoogle, setUser, setLoading, signInUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleEmailSingIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        setError("");
        toast.success("Registration successful! 🎉");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Registration failed: " + error.message);
        setError("Registration failed. Please try again.");
      });
  };

  const handleGoogleSignup = () => {
    setLoading(true);
    signInWithGoogle()
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        setError("");
        toast.success("Registration successful! 🎉");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Registration failed: " + error.message);
        setError("Registration failed. Please try again.");
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center  py-7">
      <div className="bg-base-100 p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login to Artify
        </h2>

        <form onSubmit={handleEmailSingIn} className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="your email"
              className="input input-bordered w-full"
              name="email"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="********"
              className="input input-bordered w-full"
              name="password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-full font-semibold transition"
          >
            Login
          </button>
          {error ? <p className="text-secondary">{error}</p> : ""}
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignup}
          className="w-full border-2 border-gray-300 hover:bg-base-200 py-3 rounded-full flex items-center justify-center gap-3 transition"
        >
          <FcGoogle size={24} /> Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/auth/register"
            className="text-primary font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
