import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const AddTodo = ({ setTodos }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: input.trim(), completed: false },
      ]);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-grow"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};
