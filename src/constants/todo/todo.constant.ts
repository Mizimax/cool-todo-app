export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export enum Filter {
  All = "All",
  Done = "Done",
  Undone = "Undone",
}
