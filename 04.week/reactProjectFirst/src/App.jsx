import { useState } from 'react'
import './App.css'

function App() {
 const [todos, setTodos] = useState(
  [{
    title:"go to gym ",
    description:"Go to gym 2hrs daily",
    completed:false
  },
  {
    title: "Study Dsa",
    description:"Study daily atleast 1 hour",
    completed:true
  }]
 );

  return (
    <div>
      {JSON.stringify(todos)}
      <Todo title="lets see how things work here " description="it worked "></Todo>

      {/* customButton technique is xml where we declare out own syntax and use it  */}
    </div>
  )
}

//function for todo
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
}

// component
function CustomButton(props){  

  function onClickHandler(){
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}> 
  Counter {props.count} 
  </button>
}

export default App
