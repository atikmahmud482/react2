import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  // console.log(data);
  const book = data.find((book) => book.bookId === id);
  const {
    bookId: currentBookId,
    review,
    category,
    bookName,
    author,
    image,
  } = book;
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-xs rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <h1 className="text-xl font-bold">{category}</h1>
          <div className="border-t-2 border-dashed"></div>
          <p className="py-6">{review}</p>
          <button className="mr-4 btn btn-soft btn-primary">Read</button>
          <button className="btn btn-primary">WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
