import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

const TestContext = createContext();

function ContextPage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  return (
    <div>
      <TestContext.Provider value={{ name: "田鹤松" }}>
        <Name />
      </TestContext.Provider>
    </div>
  );
}

function Name() {
  const { name } = useContext(TestContext);
  return <h1>{name}</h1>;
}

export default ContextPage;
