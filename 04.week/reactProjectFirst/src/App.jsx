import { useState } from 'react'
import './App.css'

function App() {
 const [todos, setTodos] = useState( // this  was like declaring todos hard coded 
  [{
    title:"go to gym ",
    description:"Go to gym 2hrs daily",
    completed:false
  },
  {
    title: "Study Dsa",
    description:"Study daily atleast 1 hour",
    completed:true
  },
{
    title: "new task",
    description:"lesser the turnaround time ",
    completed:true
  }]
 );

 function addTodo() { // this task expand the todo and add my task at the end
  setTodos([...todos,{
    title:"newly added one",
    description:"lets see how thing work here"
  }])
 }

  return (
    <div>
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo> */
      
      // better and safe way is to use automation cause we wont be writing 1000 lines of todos for the 1000 todos
      // so we can use map or any other means 
      }
      {<button onClick={addTodo}>Adds a hardcoded task to it   </button>}
      {
        todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }
    </div>
  )
}

//function for todo
function Todo(props){ // this one we declare our own tag and then we use it 
  return <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
  </div>
}

// component
function CustomButton(props){   // this is customized xml tag 

  function onClickHandler(){
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}> 
  Counter {props.count} 
  </button>
}

export default App
