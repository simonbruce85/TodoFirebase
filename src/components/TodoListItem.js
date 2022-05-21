import React from "react";
import { Button, IconButton, ListItem, ListItemText } from "@mui/material";
import { db } from "../firebase_config";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoListItem = ({ todo, inprogress, id }) => {

  function toggleInProgress(){
    db.collection("todos").doc(id).update({
      inprogress: !inprogress
    })
  }

  function deleteTodo(){
    db.collection("todos").doc(id).delete()
  }


  return (
    <div style={{display:"flex", width:"400px", justifyContent:"space-between"}}>
      <ListItem component="a" href="#simple-list">
        <ListItemText sx={{color: '#fafafa'}} primary={todo} secondary={inprogress ? "In progress": "Completed"} />
      </ListItem>
      <div style={{display:"flex", alignItems: "center"}}>
      <Button sx={{fontSize:"12px", width:"10px", height:"30px"}} variant="contained" color="success" onClick={toggleInProgress}>
      {inprogress ? "Done": "Pending"}
      </Button>
      <div >
      <IconButton onClick={deleteTodo} aria-label="delete" color="error">
        <DeleteIcon />
      </IconButton>
      </div>
      </div>
    </div>
  );
};

export default TodoListItem;
