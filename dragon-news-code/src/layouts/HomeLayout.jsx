import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div className="bg-white text-black">
      <header>
        {" "}
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
