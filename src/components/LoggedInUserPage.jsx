import React, { useState, useEffect } from 'react';
import Menu from '../Menu';

function LoggedInUserPage() {
  console.log('LoggedInUserPage component rendered');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const breakfastDishes = ['Pancakes', 'Waffles', 'Eggs Benedict', 'Omelette', 'French Toast', 'Breakfast Burrito', 'Crepes'];
  const dinnerDishes = ['Pasta', 'Burgers', 'Salads', 'Tacos', 'Pizza', 'Steak', 'Sushi'];

  const [breakfasts, setBreakfasts] = useState([]);
  const [dinners, setDinners] = useState([]);

  useEffect(() => {
    try {
      console.log('useEffect called');
      const breakfastsArray = days.map(() => breakfastDishes[Math.floor(Math.random() * breakfastDishes.length)]);
      const dinnersArray = days.map(() => dinnerDishes[Math.floor(Math.random() * dinnerDishes.length)]);
      setBreakfasts(breakfastsArray);
      setDinners(dinnersArray);
      console.log('State updated:', breakfasts, dinners);
    } catch (error) {
      console.error('Error generating menu:', error);
    }
  }, [days, breakfastDishes, dinnerDishes]);

  return (
    <div className="LoggedInUserPage">
      <h2>Logged in User Page</h2>
      <h3>Menu</h3>
      <div className="App">
      <Menu />
      </div>
      <div className="payment-container">
        <h3>Payment Details</h3>
        <p>Payment Method: Credit Card</p>
        <p>Amount: $100</p>
        <img src="scanner.png" alt="Scanner" />
        <button>Pay Now</button>
      </div>
    </div>
  );
}

export default LoggedInUserPage;