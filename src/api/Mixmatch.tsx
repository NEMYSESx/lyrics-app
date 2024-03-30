import axios from "axios";
import { useEffect } from "react";

const Mixmatch = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    axios
      .get(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=${}&page_size=3&page=10&s_track_rating=desc&apiKey=${apiKey}`)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });
  return <div>Mixmatch</div>;
};

export default Mixmatch;
