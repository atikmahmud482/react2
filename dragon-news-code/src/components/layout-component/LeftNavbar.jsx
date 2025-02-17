import { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="font-bold">All Category</h2>
    </div>
  );
};

export default LeftNavbar;
