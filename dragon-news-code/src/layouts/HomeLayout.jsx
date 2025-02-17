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
      </header>
      <nav className="w-11/12 mx-auto py-2">
        {" "}
        <Navbar></Navbar>{" "}
      </nav>
      <main className="w-11/12 mx-auto p-5">
        <aside>Left Navbar</aside>
        <section>Main Content</section>
        <aside>Right Navbar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
