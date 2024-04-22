import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    // console.log(event.target.name);
    const {name,value}=event.target;
    setNote((prevValue) => {
      return (
        {
          ...prevValue,
          [name]: value
        }
      )
    })
  }
  return (
    <div>
      <form>
        {/* value== controlled components */}
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/> 
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={()=>{
          props.onclick(note);
          setNote({ title: "", content: "" });
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
