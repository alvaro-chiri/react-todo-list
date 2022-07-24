import React, { useState } from "react";

//components
import Header from "./Header.jsx";
import List from "./List.jsx";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const [todoList, settodoList] = useState([]);

  const addItem = () => {
    const newList = [...todoList];
    newList.push(inputValue);
    settodoList(newList);
  };

  const deleteItem = (i) => {
    const delItem = todoList.filter((element, index) => index != i);
    settodoList(delItem);
  };

  return (
    <>
      <div className="container">
        <div className="Home">
          <Header />
          <input
            className="itemInput"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button onClick={addItem}>Add</button>
        </div>
        <div>
          {todoList.map((item, index) => {
            return (
              <>
                <div className="listItem">
                  <span className="addedItem">{item}</span>
                  <button
                    className="delButton"
                    onClick={() => deleteItem(index)}
                  >
                    X
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <footer>{todoList.length + " items left"}</footer>
      </div>
    </>
  );
};

export default Home;
