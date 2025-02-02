import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  // console.log(data);
  const book = data.find((book) => book.bookId === id);
  console.log(book);

  return (
    <div>
      <h2>Book Details: {bookId}</h2>
    </div>
  );
};

export default BookDetails;
