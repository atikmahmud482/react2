import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news = {} }) => {
  const {
    title = "No title available",
    author = {},
    rating = {},
    total_view = 0,
    details = "No details available",
    image_url = "https://via.placeholder.com/400", // Placeholder if no image
  } = news;

  return (
    <div className="card bg-white shadow-md rounded-lg p-4 border">
      {/* Author & Actions */}
      <div className="flex justify-between items-center mb-4">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={author?.img || "https://via.placeholder.com/50"}
            alt={author?.name || "Unknown"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">
              {author?.name || "Anonymous"}
            </h3>
            <p className="text-xs text-gray-500">
              {author?.published_date || "Unknown Date"}
            </p>
          </div>
        </div>

        {/* Bookmark & Share */}
        <div className="flex gap-3 text-gray-600">
          <FaRegBookmark className="cursor-pointer hover:text-blue-500" />
          <FaShareAlt className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-2">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt="news"
        className="w-full h-52 object-cover rounded-md"
      />

      {/* Details */}
      <p className="text-sm text-gray-700 mt-3">
        {details.length > 100 ? details.slice(0, 100) + "..." : details}
        <span className="text-blue-500 cursor-pointer"> Read More</span>
      </p>

      {/* Footer: Ratings & Views */}
      <div className="flex justify-between items-center mt-4 text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span className="text-sm font-semibold">
            {rating?.number || "N/A"}
          </span>
        </div>
        <span className="text-sm">{total_view} views</span>
      </div>
    </div>
  );
};

export default NewsCard;
