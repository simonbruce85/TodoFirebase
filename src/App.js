import { Button, TextField } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase_config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import TodoListItem from './components/TodoListItem';
import Navbar from './components/Navbar';


function App() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState("")

  useEffect(() => {
    getTodo();

  }, [])
  
  
  const getTodo = () =>{
    db.collection("todos").onSnapshot(function(querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc) =>({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress
      }))
      );
    });
  }



  const addTodo = (e) => {
    e.preventDefault();
    if (todoInput === ""){
      alert("Task cannot be empty")
    }else{
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("")
  }
  }

  return (
    <>
    <Navbar/>
    <div className="App" style={{ display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"#2b272b", height:"92vh"}}>
      <h1 style={{color:"white"}}>Simon's To do List 🌏</h1>
      <form >
      <div style={{display:"flex", alignItems:"center"}}> 
      <TextField id="standard-basic" label="Write a task" value={todoInput} variant="standard" style={{maxWidth: "300px", width: "90vw", color:"white"}} onChange={(e) => {setTodoInput(e.target.value)}}/>
      <Button type="submit" sx={{color:"#fafafa", borderColor:"#fafafa"}} onClick={addTodo} variant="outlined">Add Task</Button>
      </div>
      </form>

      {todos.map((todo) => (
        <TodoListItem todo={todo.todo} id={todo.id} inprogress={todo.inprogress}/>
      ))}
    </div>
    </>
  );
};

export default App;