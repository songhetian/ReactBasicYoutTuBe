import axios from "axios";
import { useEffect, useState } from "react";

function EffectInput() {
  const [age, setAge] = useState(0);
  function getCatFact(e) {
    axios.get(`https://api.agify.io/?name=${e.target.value}`).then((res) => {
      console.log(res.data);

      setAge(res.data.age);
    });
  }
  useEffect(() => {
    setAge(0);
  }, []);
  return (
    <div className="App mt-5">
      <input
        type="text"
        placeholder="请输入"
        className="placeholder-red-400"
        onChange={getCatFact}
      />
      <button className="p-1 bg-yellow-200 rounded-md ml-5">确认</button>
      <h1>{age}</h1>
    </div>
  );
}

export default EffectInput;
