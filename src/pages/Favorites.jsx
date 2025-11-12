import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAuth";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Favorites = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    axiosInstance
      .get(`/favorites/${user.email}`)
      .then((res) => {
        setArts(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [user, axiosInstance]);

  const handleUnfavorite = (id) => {
    axiosInstance
      .patch(`/artworks/${id}/favorite`, { userEmail: user.email })
      .then(() => {
        setArts((prev) => prev.filter((art) => art._id !== id));
        toast.success("Removed from favorites!");
      })
      .catch(() => toast.error("Failed to remove favorite"));
  };

  if (loading) return <Spinner></Spinner>;

  return (
    <div className="w-11/12 mx-auto py-12">
      <h1 className="text-3xl text-primary font-bold mb-8">My Favorites</h1>
      <div className="border-b-2 border-primary my-9"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {arts.map((art) => (
          <div
            key={art._id}
            className="flex flex-col justify-between p-4 rounded-lg shadow-lg hover:shadow-xl transition h-full"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-1 truncate">{art.title}</h2>
            <p className="text-gray-600 mb-3 truncate">{art.medium}</p>
            <button
              onClick={() => handleUnfavorite(art._id)}
              className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
            >
              <FaStar /> Remove Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
