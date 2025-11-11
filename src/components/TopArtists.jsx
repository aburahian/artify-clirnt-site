import { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import { Link } from "react-router";

const TopArtists = () => {
  const axiosInstance = useAxiosSecure();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/top-artists") // backend endpoint to get top artists by likes/favorites
      .then((res) => setArtists(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance]);

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Top Artists of the Week</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {artists.map((artist) => (
          <Link key={artist.email} to={`/arts/art/artist/${artist.email}`}>
            <div className="flex flex-col items-center text-center hover:scale-105 transition">
              <img
                src={artist.avatar || "/default-avatar.png"}
                alt={artist.name}
                className="w-24 h-24 rounded-full mb-2 object-cover"
              />
              <p className="font-semibold">{artist.name}</p>
              <p className="text-sm text-gray-500">{artist.likes} likes</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
