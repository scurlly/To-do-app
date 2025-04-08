import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import Tabs from "./components/Tabs";
import { ToDoInput } from "./components/ToDoInput";
import { ToDoList } from "./components/ToDoList";

function App() {
  // const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState([]);
  const [currentTab, setCurrentTab] = useState("All");
  const [darkTheme, setDarkTheme] = useState(true);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleComplete(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];

    completedTodo["complete"] = true;

    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDelete(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteCompleted() {
    let newTodoList = todos.filter((val) => {
      return !val.complete;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme
      ? "hsl(235, 21%, 11%)"
      : "hsl(0, 0%, 98%)";
    document.body.style.color = darkTheme
      ? "hsl(236, 33%, 92%)"
      : "hsl(234, 11%, 52%)";
  }, [darkTheme]);

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    console.log("here");
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <ToDoInput handleAddTodo={handleAddTodo} darkTheme={darkTheme} />
      <ToDoList
        todos={todos}
        selectedTab={currentTab}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        darkTheme={darkTheme}
      />
      <Tabs
        todos={todos}
        selectedTab={currentTab}
        setTab={setCurrentTab}
        darkTheme={darkTheme}
        handleDeleteCompleted={handleDeleteCompleted}
      />
    </>
  );
}

export default App;
