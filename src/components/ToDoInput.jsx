import { useState } from "react";

export function ToDoInput(props) {
  const { handleAddTodo, darkTheme } = props;
  const [inputValue, setInputValue] = useState("");



  var Check = {
    borderRadius: "100%",
    height: "20px",
    width:"20px",
    border: darkTheme
      ? "1px solid hsl(237, 14%, 26%)"
      : "1px solid hsl(233, 11%, 84%)",
  };

  return (
    <div className="box-center">
      <div
        className="input-container"
        style={
          darkTheme
            ? { backgroundColor: "hsl(235, 24%, 19%)" }
            : { backgroundColor: "white" }
        }
      >
        <div
          style={Check}
        ></div>
        <input
        style={ darkTheme ? {color: 'hsl(236, 33%, 92%)'} : {color: 'hsl(233, 14%, 35%)'}}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Create a new todo..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!inputValue) {
                return;
              }
              handleAddTodo(inputValue);
              setInputValue("");
            }
          }}
        />
        {/* <button onClick={() => {
                if (!inputValue) { return }
                handleAddTodo(inputValue)
                setInputValue('')
            }}><img src={circle} /></button> */}
      </div>
    </div>
  );
}
