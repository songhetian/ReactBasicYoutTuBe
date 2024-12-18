import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function IndexPage() {
  const {
    data: catFact,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cats"],
    queryFn: () => {
      return Axios.get(`https://catfact.ninja/fact`).then((res) => res.data);
    },
  });
  if (isLoading) return <p>加载中....</p>;
  return (
    <div>
      <div>
        <h1>{catFact?.fact}</h1>
        <button onClick={refetch}>重新加载</button>
      </div>
    </div>
  );
}

export default IndexPage;
