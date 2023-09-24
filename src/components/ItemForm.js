import React from "react";
import { v4 as uuid } from "uuid";
import Item from "./Item";
import { useState } from "react";



function ItemForm({ onItemFormSubmit }) {

  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleItem(event) {
    setItemName(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: category,
    };
    onItemFormSubmit(newItem);
    // Reset the form inputs
    setItemName("");
    setCategory("Produce");
  }



  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleItem} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
