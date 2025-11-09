import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-base-100 p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login to Artify
        </h2>

        <form className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="your email"
              className="input input-bordered w-full"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
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
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-full font-semibold transition"
          >
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          //   onClick={handleGoogleLogin}
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
