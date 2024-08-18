import React from "react";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";

export const TodoList = ({ todos, setTodos }) => {
  if (!todos || !Array.isArray(todos) || todos.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No todos yet. Add some tasks to get started!
      </div>
    );
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <Card key={todo.id} className="bg-secondary">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
              />
              <span
                className={`${todo.completed ? "line-through text-muted-foreground" : ""}`}
              >
                {todo.text}
              </span>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const newText = prompt("Edit todo:", todo.text);
                  if (newText) editTodo(todo.id, newText);
                }}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => deleteTodo(todo.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
