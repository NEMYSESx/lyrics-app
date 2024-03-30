import { useNavigate } from "react-router-dom";

interface SongCardProps {
  aName: string;
  sName: string;
  album: string;
}

const SongCard: React.FC<SongCardProps> = ({ aName, sName, album }) => {
  const navigate = useNavigate();

  const handleLyrics = () => {
    navigate("/lyrics");
  };
  return (
    <div className="flex flex-col  border m-2 border-black p-2">
      <h1 className="font-bold text-xl ml-1">{aName}</h1>
      <div className="ml-1">
        <p>
          <b>Song:</b> {sName}
        </p>
        <p>
          <b>Album: </b>
          {album}
        </p>
      </div>
      <button
        className=" bg-black text-white w-full my-2 p-1"
        onClick={handleLyrics}
      >
        View Lyrics
      </button>
    </div>
  );
};

export default SongCard;
