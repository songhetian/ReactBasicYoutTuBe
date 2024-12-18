import { useParams } from "react-router-dom";

function UserPage() {
  const { username } = useParams();
  return <div>{username} </div>;
}

export default UserPage;
