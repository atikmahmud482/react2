import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-gray-400 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4 ">
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-outline">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              <div className="mask mask-star" aria-label="1 star"></div>
              <div className="mask mask-star" aria-label="2 star"></div>
              <div className="mask mask-star" aria-label="3 star"></div>
              <div
                className="mask mask-star"
                aria-label="4 star"
                aria-current="true"></div>
              <div className="mask mask-star" aria-label="5 star"></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
