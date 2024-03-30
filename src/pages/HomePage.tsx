import NavBar from "../components/NavBar";
import Search from "../components/Search";
import SongCardList from "../components/SongCardList";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Search />
      <h1 className="m-4 font-bold text-xl">Top 10 Tracks</h1>
      <SongCardList />
    </div>
  );
};

export default HomePage;
