import React, { useState } from "react";
import "../App.css";



const NestTodo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);



  const addItem = () => {
    if (!inputData) {
      alert("plzz fill data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );

      setToggleSubmit(true);

      setInputData("");

      setIsEditItem(null);
    } else {
      const allInputData = {    
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  // delete the items

  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  };

  // edit the item
  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);

    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);
  };

  // remove all
  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div>
        <div>
          
          <div>
            <input
              type="text"
              placeholder="Add Sub Items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="far fa-edit add-btn"
                title="Update Item"
                onClick={addItem}
              ></i>
            )}
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <p>{elem.name}</p>

                  {/* 

                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => editItem(elem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>

                 */}
                </div>
              );
            })}
          </div>

          {/* clear all button */}
            
            {/* className="showItems"  className="btn effect04"*/}
          <div >
            <button
              
              data-sm-link-text="Remove All"
              onClick={removeAll}
              style={{fontSize: "10px"}}
            >
              <span>Clear Sub List</span>
            </button>
          </div>
            
          

        </div>
      </div>
    </>
  );
};

export default NestTodo;
