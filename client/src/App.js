import {useEffect,useState} from 'react';
import './App.css';
import Title from './components/Title';
import CreateItem from './components/CreateItem';
import ItemContainer from './components/ItemContainer';


function App() {
  const [items,setItems] = useState([]);
  const handleItem = (newItem) => {
    setItems((previousItems) => [...previousItems,newItem] )
  }

 
  useEffect(() => {
  async function fetchData() {
   const res = await fetch("https://frozen-savannah-77559.herokuapp.com/items");
   const data = await res.json();
   setItems(data);
  }
    fetchData();
  },[])
  
  const modifyItems = (itemIndex) => {
    //items.splice(itemIndex,1);
    //const newItemList  =[...items];
    //setItems(newItemList);
     fetch(`https://frozen-savannah-77559.herokuapp.com/items/${itemIndex}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => {
      const deletedItem=items.find(item => item._id === res._id);
      items.splice(items.indexOf(deletedItem),1);
      const newItemList  =[...items];
      setItems(newItemList);

    })
   
  }
  return (
    <div className="App">
     <Title />
     <CreateItem addItem={handleItem}/>
     <ItemContainer items ={items} change={modifyItems}/>
    </div>
  );
}

export default App;
