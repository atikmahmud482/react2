import "./Watch.css";
const Watch = ({ watch }) => {
  const { brand, price } = watch;
  return (
    <div>
      <h2>Watches: {brand} </h2>
      <p>Price:{price} </p>
    </div>
  );
};

export default Watch;
