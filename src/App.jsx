import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./components/theme-provider.jsx";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-3xl font-bold">Todo App</CardTitle>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <MoonIcon className="h-4 w-4" />
            ) : (
              <SunIcon className="h-4 w-4" />
            )}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <AddTodo setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="app-theme">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
