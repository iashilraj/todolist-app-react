import { useState } from 'react';

export function NewTodoForm({onSubmit}) {
const [newItem, setNewItem] = useState('');
    
const handleSubmit = (e) => {
    e.preventDefault();
    if(newItem === "") return
    onSubmit(newItem);
    setNewItem("");
}    
return (
    <form className='new-item-form' onSubmit={handleSubmit}>
        <div className='new-item-form'>
        <label htmlFor="item">New Item</label>
        <input type="text" 
            id="item" 
            onChange={(e)=> setNewItem(e.target.value)} 
            value={newItem}>
        </input>
        </div>
        <button className='btn'>Add</button>
    </form>
)
}