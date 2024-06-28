// Menu.jsx

import React, { useState, useEffect } from 'react';
import './Menu.css'; // Import your CSS file for styling

const Menu = ({ menuItems, setMenuItems }) => {
  const [breakfastInput, setBreakfastInput] = useState('');
  const [dinnerInput, setDinnerInput] = useState('');

  const addItem = (mealType) => {
    let newItem;
    if (mealType === 'breakfast' && breakfastInput.trim() !== '') {
      newItem = { text: breakfastInput, type: 'breakfast', id: Date.now() };
      setMenuItems([...menuItems, newItem]);
      setBreakfastInput('');
    } else if (mealType === 'dinner' && dinnerInput.trim() !== '') {
      newItem = { text: dinnerInput, type: 'dinner', id: Date.now() };
      setMenuItems([...menuItems, newItem]);
      setDinnerInput('');
    }
  };

  const removeItem = (id) => {
    const updatedItems = menuItems.filter(item => item.id !== id);
    setMenuItems(updatedItems);
  };

  useEffect(() => {
    // Save menuItems to localStorage whenever it changes
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  return (
    <div className="menu-container">
      <div className="meal-section">
        <h2><i className="fas fa-coffee"></i> Breakfast</h2>
        <ul className="meal-list">
          {menuItems.filter(item => item.type === 'breakfast').map(item => (
            <li key={item.id}>
              {item.text}
              <span className="remove" onClick={() => removeItem(item.id)}>&#10060;</span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={breakfastInput}
          onChange={(e) => setBreakfastInput(e.target.value)}
          placeholder="Add breakfast item"
        />
        <button onClick={() => addItem('breakfast')}>Add Breakfast</button>
      </div>

      <div className="meal-section">
        <h2><i className="fas fa-utensils"></i> Dinner</h2>
        <ul className="meal-list">
          {menuItems.filter(item => item.type === 'dinner').map(item => (
            <li key={item.id}>
              {item.text}
              <span className="remove" onClick={() => removeItem(item.id)}>&#10060;</span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={dinnerInput}
          onChange={(e) => setDinnerInput(e.target.value)}
          placeholder="Add dinner item"
        />
        <button onClick={() => addItem('dinner')}>Add Dinner</button>
      </div>
    </div>
  );
};

export default Menu;
