import React, {useState} from "react"
import './Common.css';

// This challenge is designed to test your react skills in making components, mapping data out,
// managing your state and receiving user input.

// You need to create a To-do List application that has the following features:
// •
// Add items to the list
// •
// Check items as done
// •
// Delete individual items from the list
// Visually this project is completely down to your choice! Get creative and have a look around at
// existing to-do list applications and designs.
// Stretch goals:
// •
// Edit items
// •
// Archive items from the main list into a secondary list. (Don’t need to be saved to databases
// or anything mad)


function Common() {
//  const [shaStateThing, setShaStateThing] = useState(ItemC);
//   <>
//   <h1>User text</h1>
//   <input onChange = {handler}/>
//   <h2>{inputText}</h2>
  
// </>

  // const DisplayItem = (props) => {

  //   return (
  //       <p>
  //         The title is {props.value}, I am going in.
  //       </p>
  //   )
  // }

  const InputItem = (props) => {
    const [inputText, setInputText] = useState("");
    const [shaTextArray, setShaTextArray] = useState([]);
    const [inputTitle, setInputTitle] = useState("");
    const [shaTitleArray, setShaTitleArray] = useState([]);
    // setDisplay(evaluate(display));
    // console.log(evaluate(display));
    // alert(evaluate(display));

    const inputHandler = (arg) => {
      setInputText(arg);
      console.log(inputText);
      return inputText;
    }

    const inputTitleHandler = (arg) => {
      setInputTitle(arg);
      console.log(inputTitle);
      return inputTitle;
    }

    const applyChangeHandler = () => {
      setShaTextArray(shaTextArray => [...shaTextArray, inputText]);
      setShaTitleArray(shaTitleArray => [...shaTitleArray, inputTitle]);

      console.log(shaTextArray);
      console.log(shaTitleArray);
    }

    const removeHandler = (arg) => {
      // console.log("removeHandler clicked");
      const newTextArray = [...shaTextArray];
      newTextArray.splice(arg, 1);

      const newTitleArray = [...shaTitleArray];
      newTitleArray.splice(arg, 1);


      setShaTextArray(newTextArray);
      setShaTitleArray(newTitleArray);
    }

    return (
      <>
        <div>
         <p>Title: </p><input id = "titleHandlerBox" onChange = {
            (e) => inputTitleHandler(e.target.value)
          }></input>
        </div>

        <div>
        <p>Note: </p><input id = "noteHandlerBox" onChange = {
            (e) => inputHandler(e.target.value)
          }></input>
        </div>

        <button onClick = {
          () => applyChangeHandler()
          }>
            Add Item
        </button>      
        {/* <p style={{color: 'red'}}>inputtext {inputText}</p> */}
        
        
        {
          shaTextArray.map((st, i) => {
              return <>
                  <ItemC title={shaTitleArray[i]} note = {st} key = {i}/>
                  <button onClick = {(i) => removeHandler(i)}>Remove Item</button>
                </>
            }
          )
        }
      </>
    )
  }

//   const DisplayItemMap = (props) => {

//     //         <div>
// //             <h1>Common component</h1>
// //             {numbers.map((n, i) => {
// //                 return <h1 key={i} onClick = {() => removeHandler(i)}>{n}</h1>
// //             })}
// //             <button onClick={addHandler}>add number</button>
// //         </div>
//     return (
//       <>
        
//       <h1>
//         {props.title} (DisplayItemMap.title);
//       </h1>
        
//       </>
//       //placeholder
//     )
//   }

  return (
    <>
      <header>
        <h1>To-do List</h1>
      </header>

      <div>
        <InputItem/>
      </div>
    </>
    
  );
}

const ItemC = (props) => {
  // state = {
  //   checked: false,
  //   note: "",
  //   title: "",
  //   priority: 0
  // } This is not an object

  // const [checked, setChecked] = useState(false);
  const [note, setNote] = useState("");
  const [title, setTitle] = useState(props.title);
  // const [priority, setPriority] = useState(0);
  // const [order, setOrder] = useState(0);

  return (
    <>
        <h3>
          {props.title}
        </h3>

        <p>
          {props.note}
        </p>

        <p>Done?<input type="checkbox"></input></p> 
    </>
  )

  
}

export default Common;

