import React, { useState } from "react";
import "./App.css";

function App() {

  //   let [text,setText] = useState("Edureka");
    
  //   let changeText =()=>{
  //     setText("Welcome to Edureka");
  //   }

  // return (
  //   <center>
  //     <button onClick={changeText}>Change Text</button>
  //     <h1>{text}</h1>
  //   </center>

  let [inputValue,setInputValue] = useState("");
  let [todoList,settodoList] = useState([])

  let inputChange = (event)=>{
    let value = event.target.value;
    setInputValue(value);
  };

  let savetoDo = ()=>{
    let newTodo = {
      name : inputValue,
      isDone : false
    }
    let _todoList = [...todoList]

    // 1- create new copy array , 2- push data in new copy , 3- pass new array in setToDoList
    _todoList.push(newTodo);
    settodoList(_todoList);
    alert("ToDO saved");
    setInputValue("");
  };

    return (
      <>
     <section className="container-fluid"> 
      <section className="row">
        <section className="col-lg-6 col-10">
          <p className="text-center h3 text-primary">Todo Application
          <small className="badge text-bg-primary ms-2">2</small>
          </p>
          <div className="input-group">
            <input type="text"
            className="form-control rounded-0"
            placeholder="Enter ToDo"
            value={inputValue}
            onChange={inputChange}
             />
             
             <button onClick={savetoDo} className="input-group-text btn btn-success rounded-0">Save</button>
          </div>
          <hr />
          <ul className="list-group">
            {
              todoList.map((todo,index)=>{
                return (
                  <li className="list-group-item d-flex justify-content-between" key={index}>
              <div>
              <input type="checkbox" />
              <span className="ms-2">{todo.name}</span>
            </div>
              <button className="btn btn-sm btn-danger">DEL</button>
              </li>
                )
              })
              }

            {/* <li className="list-group-item" >
              <input type="checkbox" checked disabled />
              <span className="ms-2 fst-italic text-decoration-line-through">An item</span></li> */}
</ul>
        </section>
      </section>
   </section> 
    </>
  )
}

export default App;