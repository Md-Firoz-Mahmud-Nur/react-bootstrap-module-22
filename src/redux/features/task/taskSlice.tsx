import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
}

const initialState : InitialState = {
  task: [
    {
      id: 0,
      title: "Initialize Frontend",
      description: "Create Home Page And Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: 0,
      title: "Initialize Frontend",
      description: "Create GitHub Repo",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
