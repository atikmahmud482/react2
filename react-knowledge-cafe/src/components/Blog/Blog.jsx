import PropTypes from "prop-types"; // ES6
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />

          <div className="ml-6">
            <h3 className="text-2xl">{author} </h3>
            <p>{posted_date} posted_date</p>
          </div>
        </div>
        <div>
          <span className="">{reading_time} min read</span>
          <button
            onClick={handleAddToBookmark}
            className="ml-2 m-2 text-2xl text to-black">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
