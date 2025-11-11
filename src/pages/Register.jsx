import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../hook/useAuth";

const Register = () => {
  const {
    createUser,
    updateProfileInfo,
    setLoading,
    setUser,
    user,
    signInWithGoogle,
  } = useAuth();


  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        updateProfileInfo({ displayName, photoURL, email })
          .then(() => {
            setUser({ ...user, displayName, photoURL, email });
            setLoading(false);
          })
          .catch((err) => toast.error("Update failed: " + err.message));

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
    <div className="min-h-screen flex items-center justify-center py-7 ">
      <div className="bg-base-100 p-10 rounded-2xl shadow-lg w-full max-w-md lg:mt-7">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Register to Artify
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full"
              name="name"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="Profile photo URL"
              className="input input-bordered w-full"
              name="photo"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              required
              name="email"
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
            Register
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
          Already have an account?{" "}
          <Link
            to={"/auth"}
            className="text-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
