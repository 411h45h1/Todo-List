export interface Todo {
    todoName: string;
}

export interface TodoItem {
    todo: Todo;
    removeTodoItem(taskNameToDelete: string): void;
  }