import { useState } from "react";
export default function Quote(props) {
  const [likes, setLikes] = useState(0);

  const Like = () => {
    setLikes(likes + 1);
  };
  const Dislike = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  return (
    <div className="Quote">
      <h2>Quote of the day:</h2>
      <p>{props.text}</p>
      <p>{props.autor}</p>
      <p>{props.data}</p>
      <p>Likes: {likes}</p>
      <button className="buttonlike" onClick={Like}>
        Like
      </button>
      <button className="buttondis" onClick={Dislike}>
        Dislike
      </button>
    </div>
  );
}