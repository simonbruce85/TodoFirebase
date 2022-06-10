import { Button, IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { db } from "../firebase_config";
import DeleteIcon from "@mui/icons-material/Delete";

const Todoitem = ({ todo, inprogress, id }) => {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div className="w-full md:w-[400px] h-[200px] bg-[#393E46] rounded-xl hover:-translate-y-2 duration-500 flex flex-col">

        {inprogress ?  (<><div className="flex justify-between px-4 py-2 content-center w-full h-[70%]">
        <h1 className="text-justify text-[#00ADB5] whitespace-normal overflow-auto">{todo}</h1>
      </div>
        <div className="flex items-center justify-between px-4">
            <div className="">
              <h1 className="text-gray-300">Status: {inprogress ? "Pending" : "Completed!"}</h1>
            </div>
          <div className="flex justify-between py-2">
            
              <button
                className=" min-w-[60px] items-center px-2 rounded-md bg-[#00FFF5]"
                onClick={toggleInProgress}
              >
                Done
              </button>
            
            <div>
              <IconButton
                onClick={deleteTodo}
                aria-label="delete"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
      </div></>)
      : 
      (<><div className="flex justify-between px-4 py-2 content-center w-full h-[70%]">
        <h1 className="text-justify text-[#00ADB5] whitespace-normal overflow-auto line-through">{todo}</h1>
      </div>
        <div className="flex items-center justify-between px-4">
            <div className="">
              <h1 className="text-gray-300">Status: {inprogress ? "Pending" : "Completed!"}</h1>
            </div>
          <div className="flex justify-between py-2">
              <button
                className=" min-w-[60px] items-center justify-center px-2 rounded-md bg-[#00ADB5]"
                onClick={toggleInProgress}
              >
                Undo
              </button>
            
            <div>
              <IconButton
                onClick={deleteTodo}
                aria-label="delete"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div></>)}


     
    </div>
  );
};

export default Todoitem;

{/*<div className="flex justify-between px-4 py-2 content-center w-full h-[70%]">
        <h1 className="text-justify text-[#00ADB5] whitespace-normal overflow-auto">{todo}</h1>
      </div>
        <div className="flex items-center justify-between px-4">
            <div className="">
              <h1 className="text-gray-300">Status: {inprogress ? "Pending" : "Completed!"}</h1>
            </div>
          <div className="flex justify-between py-2">
            {inprogress ? (
              <button
                className=" min-w-[60px] items-center px-2 rounded-md bg-[#00FFF5]"
                onClick={toggleInProgress}
              >
                Done
              </button>
            ) : (
              <button
                className=" min-w-[60px] items-center justify-center px-2 rounded-md bg-[#00ADB5]"
                onClick={toggleInProgress}
              >
                Undo
              </button>
            )}
            <div>
              <IconButton
                onClick={deleteTodo}
                aria-label="delete"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
      </div> */}