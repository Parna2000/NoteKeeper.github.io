import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);
  function handleClick(note) {
    setNoteList((prevValue) => {
      return [
        ...prevValue,
        note
      ];
    })
    event.preventDefault();
  }
  function handleDelete(id){
    setNoteList((prevValue)=>{
      return prevValue.filter((val,index)=>{
        return index!=id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onclick={handleClick} />
      {noteList.map((noteListItem, index) => {
        return <Note key={index} id={index} title={noteListItem.title} content={noteListItem.content} onclick={handleDelete}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
