import { useEffect, useState } from "react";
import "../App.css";
import { db } from "../firebase_config";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Todoitem from "./Todoitem";
const Taskcontainer = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
   getTodo(); 
  }, []);

  const getTodo = () => {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (todoInput === "") {
      alert("Task cannot be empty");
    } else {
      db.collection("todos").add({
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput,
      });
      setTodoInput("");
    }
  };

  return (
    <div className="items-center justify-center bg-[#222831] min-h-[90vh] h-full w-full py-8">
      <div className="h-[30%] flex flex-col w-full justify-center items-center px-4">
        <h1 className="text-gray-300 text-4xl text-center">Simon's To do List 🌏</h1>
        <form className="w-full md:w-[400px] h-[200px] bg-[#393E46] rounded-xl mt-2">
          <div className=" flex flex-col p-4 ">
            <textarea
              className="bg-[#393E46] text-[#00ADB5] placeholder:text-[#00ADB5] placeholder:opacity-50 w-full resize-none"
              placeholder="Add a task"
              rows='5'
              type="submit"
              value={todoInput}

              onChange={(e) => {
                setTodoInput(e.target.value);
              }}
              
            ></textarea>
            <div className="flex py-2 justify-end">
              <button
                className="min-w-[50px] items-center px-2 rounded-md py-1 bg-[#00ADB5]"
                type="submit"
                onClick={addTodo}
              >
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full pt-16 min-h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-4 justify-center items-center gap-6">
          {todos.map((todo) => (
            <Todoitem
              todo={todo.todo}
              id={todo.id}
              inprogress={todo.inprogress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Taskcontainer;
