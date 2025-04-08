import { ToDoCard } from "./ToDoCard";

export function ToDoList(props) {
    const { todos, selectedTab } = props

    
    const fliteredTodos = selectedTab === 'All'? todos :
    selectedTab === 'Active' ? todos.filter(val => !val.complete) :
    todos.filter(val => val.complete)


    return (
        <div className="center-section">
        {fliteredTodos.map((todo, todoIndex) => {
            const tempTodoIndex = todos.findIndex(val => val.input == todo.input)
            console.log(todo.complete)

            return (
                
                <ToDoCard key={todoIndex} 
                index={tempTodoIndex} 
                todo={todo} 
                {...props}
                />
                
            )
        })

        }
            
        </div>
    )
}