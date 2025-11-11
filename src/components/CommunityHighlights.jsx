import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";

const CommunityHighlights = () => {
  const axiosInstance = useAxiosSecure();
  const [arts, setArts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/community-highlights") // backend endpoint to get trending artworks
      .then((res) => setArts(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance]);

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Community Highlights</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {arts.map((art) => (
          <div
            key={art._id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-full flex flex-col"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1 truncate">{art.title}</h3>
                <p className="text-gray-600 mb-2 truncate">{art.artistName}</p>
              </div>
              <p className="text-gray-500 text-sm mt-auto">
                {art.likes?.length || 0} Likes
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityHighlights;
