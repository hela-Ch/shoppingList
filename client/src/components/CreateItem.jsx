import { useState } from "react";


const CreateItem = ({addItem}) => {
    const [value,setValue] = useState("");

    const ChangeValue =(event) =>{
     setValue(event.target.value);
    }


    const handleSubmit = (event)=>{
       event.preventDefault();
       
        fetch("https://frozen-savannah-77559.herokuapp.com/items", {
             headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({name:value})
       }).then(res => res.json()).then(data => addItem(data));
       
       setValue("");
       
    }

    return (
        <div className="addItem">
        <h2> Add new item</h2>
        <input type="text" name="userInput" id="userInput" value={value} onChange={ChangeValue} />
        <input type="submit" value="submit" onClick={handleSubmit}/>
        </div>
       
    )
}









export default CreateItem;