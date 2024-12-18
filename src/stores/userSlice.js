import { createSlice } from "@reduxjs/toolkit";

const useUserStore = createSlice({
  name: "user",
  initialState: {
    name: "张三",
    age: 100,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = useUserStore.actions;
export default useUserStore;
