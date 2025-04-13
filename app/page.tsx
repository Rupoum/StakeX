import Navbar from "../components/navbar";
import PopularGames from "../components/popularGames";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-20 mt-5">
        <PopularGames />
      </div>
    </>
  );
}
