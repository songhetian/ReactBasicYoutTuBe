import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FetchPage({ title }) {
  const [catFact, setCatFact] = useState("");
  const navigate = useNavigate();
  function getCatFact() {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }
  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <div className="mt-5">
      <button onClick={() => navigate(`/context?name=john`)}>跳转到context</button>
      <button onClick={() => navigate(`/user/song`)}>跳转到user</button>
      <p className="text-2xl text-yellow-400 mb-4">{title}</p>
      <button
        onClick={getCatFact}
        className="text-red-400 rounded-lg bg-blue-300 p-4 shadow-lg hover:bg-blue-500 hover:text-yellow-950 transition-all duration-300">
        Generate Cat Fact
      </button>
      <p>{catFact}</p>
    </div>
  );
}

export default FetchPage;
