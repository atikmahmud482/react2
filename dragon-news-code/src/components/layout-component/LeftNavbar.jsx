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
      <h2 className="font-semibold mb-3">All Category ({category.length})</h2>
      <div className="flex flex-col gap-3">
        {category.map((category) => (
          <button
            className="btn bg-amber-100 border-none text-black hover:bg-amber-200"
            key={category.category_id}>
            {" "}
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
