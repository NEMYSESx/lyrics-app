import { useContext } from "react";
import SongCard from "./SongCard";
import { AppContext } from "../context/Context";
const SongCardList = () => {
  const songs = useContext(AppContext);
  return (
    <div className="grid grid-cols-2 items-center w-3/4">
      {songs.map((song) => (
        <SongCard aName={song.aName} sName={song.sName} album={song.album} />
      ))}
    </div>
  );
};

export default SongCardList;
