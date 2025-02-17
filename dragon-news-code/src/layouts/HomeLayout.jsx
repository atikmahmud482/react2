import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="bg-white text-black font-poppins">
      <header>
        {" "}
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <section className="w-11/12 mx-auto py-2">
          <Navbar></Navbar>
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
