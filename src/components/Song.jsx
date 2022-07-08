/** @format */

import { HeartFill, Heart } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { addLike, removeLike } from "../redux/actions";

const Song = ({ track }) => {
  const songs = useSelector((state) => state.songs);

  const dispatch = useDispatch();

  const isLike = songs.includes(track.title);

  const toggleLike = () => {
    isLike ? dispatch(removeLike(track.title)) : dispatch(addLike(track.title));
  };
  return (
    <div className="py-3 trackHover">
      {isLike ? (
        <HeartFill color="red" onClick={toggleLike} />
      ) : (
        <Heart color="white" onClick={toggleLike} />
      )}

      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        {track.title}
      </span>
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
    </div>
  );
};

export default Song;