import React, { useState } from 'react';
import './App.css';

const activities = ["playcricket", "playfootball", "playbadminton"];

function App() {
  const [checkedItems, setCheckedItems] = useState({}); // State to store checked items

  // Function to handle checking/unchecking of items
  const handleCheckboxChange = (index) => {
    setCheckedItems({
      ...checkedItems,
      [index]: !checkedItems[index] // Toggle the checked state
    });
  };

  // Function to handle deletion of items
  const handleDelete = (index) => {
    const updatedCheckedItems = { ...checkedItems };
    delete updatedCheckedItems[index]; // Remove the item from checked items
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index)}
              />
              {activity}
            </label>
            {checkedItems[index] && ( // Show delete button if item is checked
              <button onClick={() => handleDelete(index)}>Delete Item</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
