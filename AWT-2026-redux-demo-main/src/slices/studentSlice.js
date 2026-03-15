import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    { id: 1, name: "arjun", roll: 101 },
    { id: 2, name: "bala", roll: 406 },
    { id: 5, name: "uni", roll: 407 },
  ],
};
const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
      return state;
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (stu) => stu.id !== action.payload,
      );
      return state;
    },
  },
});
export const { addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;
