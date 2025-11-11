import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const MyGallery = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    axiosInstance
      .get(`/artworks?artistEmail=${user.email}`)
      .then((res) => {
        setArts(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [user, axiosInstance]);
  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this artwork?")) return;
    axiosInstance
      .delete(`/artworks/${id}`)
      .then(() => {
        setArts((prev) => prev.filter((art) => art._id !== id));
        toast.success("Artwork deleted!");
      })
      .catch((err) => toast.error("Delete failed"));
  };

  if (loading) return <Spinner />;

  return (
    <div className="w-11/12 mx-auto py-12">
      <h1 className="text-3xl text-primary font-bold mb-8">My Gallery</h1>
      <div className="border-b-2 border-primary my-9"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8">
        {arts.map((art) => (
          <div
            key={art._id}
            className="flex flex-col justify-between p-4 rounded-lg shadow-lg"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">{art.title}</h2>
            <p className="text-gray-600">{art.medium}</p>
            <div className="flex gap-2 mt-4">
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                Update
              </button>
              <button
                onClick={() => handleDelete(art._id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGallery;
