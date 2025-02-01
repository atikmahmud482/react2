import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  console.log(bookId);

  return (
    <div>
      <h2>Book Details</h2>
    </div>
  );
};

export default BookDetails;
