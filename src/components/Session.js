import { getSession } from "../api";
import { useParams, } from "react-router-dom";

export default function Session() {
  // Replace the placeholder catId and sessionId variables with a React Router Hook
  // const catId = "3d-printing-and-design";
  // const sessionId = "3d-printing-metal";
  const { catId, sessionId } = useParams();

  const { name, desc, speaker } = getSession({catId, sessionId});

  
  return (
    <div className="container">
      <h3>{name}</h3>
      <p>{desc}</p>
      <h4>{speaker.name}</h4>
      <span>
        {speaker.title} at {speaker.org}
      </span>
      <p>{speaker.bio}</p>
      
    </div>
  );
  
}