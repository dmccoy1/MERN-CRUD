 import { useState, useEffect } from 'react';
 import Axios from 'axios';
 import './App.css';

function App() {

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [newItemName,setNewItemName] = useState('')
  const[itemList, setItemList]= useState([])

  useEffect(()=>{
    Axios.get('http://localhost:80/read').then((response)=>{
    setItemList(response.data)
    });

  }, []);

  const addToList = () =>{
    //console.log(itemName + itemPrice);
    Axios.post("http://localhost:80/insert",{
      itemName: itemName,
      itemPrice: itemPrice,
    });
  };

  const updateList = (id) =>{
    Axios.put("http://localhost:80/update",{id:id, newItemName:newItemName})
  }
  const deleteList = (id) =>{
    Axios.delete(`http://localhost:80/delete/${id}`)
  }
 
  return (
    <div className="App">
    <h1>CRUD App with MERN</h1>
    <label>Item:</label>
    <input type="text" onChange={(event)=>{
      setItemName(event.target.value);
    }}/>
    <label>Price:</label>
    <input type="number" onChange={(event)=>{
      setItemPrice(event.target.value) }}/>
    <button onClick={addToList}>Add To List</button>

      <h1>Shopping List</h1>
      {itemList.map((val, key)=> {
        return(
          <div key={""} className="item">
            <h1>{val.itemName}</h1> <h1>{val.itemPrice}</h1>
            <input type="text" placeholder="Update Item Name.."onChange={(event)=>{
      setNewItemName(event.target.value);
    }}/>
            <button onClick={()=>updateList(val._id)}>Update</button>
            <button onClick={()=>deleteList(val._id)}>Delete</button>
          </div>

        ) 

      })}
 
    </div>
  );
}

export default App;
