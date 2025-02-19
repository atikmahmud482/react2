import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className="card bg-white shadow-md rounded-lg p-4 border my-2">
      {/* Author & Actions */}
      <div className="flex justify-between items-center mb-4">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">{news.author.name}</h3>
            <p className="text-xs text-gray-500">
              {news.author.published_date}
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
      <h2 className="text-lg font-bold mb-2">{news.title}</h2>

      {/* Image */}
      <img
        src={news.image_url}
        alt="news"
        className="w-full h-52 object-cover rounded-md"
      />

      {/* Details */}
      <p className="text-sm text-gray-700 mt-3">
        {news.details.slice(0, 100)}...{" "}
        <Link to={`/news/${news._id}`} className="text-blue-500 cursor-pointer">
          Read More
        </Link>
      </p>

      {/* Footer: Ratings & Views */}
      <div className="flex justify-between items-center mt-4 text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span className="text-sm font-semibold">{news.rating.number}</span>
        </div>
        <span className="text-sm">{news.total_view} views</span>
      </div>
    </div>
  );
};

export default NewsCard;
