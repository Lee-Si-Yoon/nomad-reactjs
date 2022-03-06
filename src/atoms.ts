import { atom, selector } from "recoil";

// useable interface Enumerable
// Enum is actually a list of numbers, which helps us to write in string
export enum Categories {
  // "TO_DO" was actually 0
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  // interface fot toDoState, if null toDos will only return emty array
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "catgory",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
