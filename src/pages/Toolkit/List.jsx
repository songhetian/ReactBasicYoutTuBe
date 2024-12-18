import { useDispatch, useSelector } from "react-redux";
import { setName, setAge } from "../../stores/userSlice";

function List() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <p>用户名: {user.name}</p>
      <p>年龄: {user.age}</p>
      <button onClick={() => dispatch(setName("李四"))}>修改用户名</button>
      <button onClick={() => dispatch(setAge(101))}>修改年龄</button>
    </div>
  );
}

export default List;
