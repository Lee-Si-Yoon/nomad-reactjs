import { atom } from "recoil";

export interface IToDo {
  // interface fot toDoState, if null toDos will only return emty array
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
