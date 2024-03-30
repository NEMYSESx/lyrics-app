import { useNavigate } from "react-router-dom";

const LyricsPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="border w-screen flex flex-col justify-center itmes-center">
      <span className="border m-2 min-w-16">bound to fall in love</span>
      <button className="border" onClick={handleBack}>
        Go BACK
      </button>
    </div>
  );
};

export default LyricsPage;
