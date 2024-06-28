import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../AdminDashboard.css';
import Menu from '../Menu';

function AdminDashboard() {
  const [girlsRooms, setGirlsRooms] = useState(Array(4).fill(Array(5).fill(false)));
  const [boysRooms, setBoysRooms] = useState(Array(4).fill(Array(5).fill(false)));
  const [menuItems, setMenuItems] = useState([]);

  const toggleRoomStatus = (gender, floor, room) => {
    const updatedRooms = gender === 'girls' ? [...girlsRooms] : [...boysRooms];
    updatedRooms[floor][room] = !updatedRooms[floor][room];
    gender === 'girls' ? setGirlsRooms(updatedRooms) : setBoysRooms(updatedRooms);
  };

  const getVacantRooms = (rooms) => {
    let vacantRooms = 0;
    rooms.forEach((floor) => {
      vacantRooms += floor.filter((room) => !room).length;
    });
    return vacantRooms;
  };

  const getVacantRoomNumbers = (rooms) => {
    const vacantRoomNumbers = [];
    rooms.forEach((floor, floorIndex) => {
      floor.forEach((room, roomIndex) => {
        if (!room) {
          vacantRoomNumbers.push(`${floorIndex + 1}${roomIndex + 1}`);
        }
      });
    });
    return vacantRoomNumbers;
  };

  const saveData = () => {
    localStorage.setItem('girlsRooms', JSON.stringify(girlsRooms));
    localStorage.setItem('boysRooms', JSON.stringify(boysRooms));
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
    alert('Data saved successfully!');
  };

  useEffect(() => {
    const storedGirlsRooms = localStorage.getItem('girlsRooms');
    const storedBoysRooms = localStorage.getItem('boysRooms');
    const storedMenuItems = localStorage.getItem('menuItems');
    if (storedGirlsRooms && storedBoysRooms) {
      setGirlsRooms(JSON.parse(storedGirlsRooms));
      setBoysRooms(JSON.parse(storedBoysRooms));
    }
    if (storedMenuItems) {
      setMenuItems(JSON.parse(storedMenuItems));
    }
  }, []);

  return (
    <div className="admin-dashboard">
      <h2 className="Welcome"><i className="fas fa-user-shield"></i> Welcome, Admin!</h2>
      <div className="section">
        <div className="vacant-rooms">
          <h3><i className="fas fa-female"></i> Girls' Rooms</h3>
          <p><i className="fas fa-door-open"></i> Vacant rooms: {getVacantRooms(girlsRooms)}</p>
          <p><i className="fas fa-list"></i> Vacant room numbers: {getVacantRoomNumbers(girlsRooms).join(', ')}</p>
          {girlsRooms.map((floor, floorIndex) => (
            <div key={floorIndex} className="floor">
              <h4><i className="fas fa-building"></i> Floor {floorIndex + 1}</h4>
              {floor.map((isBooked, roomIndex) => (
                <div key={roomIndex} className="room-card">
                  <p>Room {`${floorIndex + 1}${roomIndex + 1}`} - {isBooked ? 'Booked' : 'Vacant'}</p>
                  <button onClick={() => toggleRoomStatus('girls', floorIndex, roomIndex)}>
                    {isBooked ? <i className="fas fa-times-circle"></i> : <i className="fas fa-check-circle"></i>} 
                    {isBooked ? ' Mark as Vacant' : ' Mark as Booked'}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="vacant-rooms">
          <h3><i className="fas fa-male"></i> Boys' Rooms</h3>
          <p><i className="fas fa-door-open"></i> Vacant rooms: {getVacantRooms(boysRooms)}</p>
          <p><i className="fas fa-list"></i> Vacant room numbers: {getVacantRoomNumbers(boysRooms).join(', ')}</p>
          {boysRooms.map((floor, floorIndex) => (
            <div key={floorIndex} className="floor">
              <h4><i className="fas fa-building"></i> Floor {floorIndex + 1}</h4>
              {floor.map((isBooked, roomIndex) => (
                <div key={roomIndex} className="room-card">
                  <p>Room {`${floorIndex + 1}${roomIndex + 1}`} - {isBooked ? 'Booked' : 'Vacant'}</p>
                  <button onClick={() => toggleRoomStatus('boys', floorIndex, roomIndex)}>
                    {isBooked ? <i className="fas fa-times-circle"></i> : <i className="fas fa-check-circle"></i>} 
                    {isBooked ? ' Mark as Vacant' : ' Mark as Booked'}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="menu-container">
        <h3>Menu</h3>
        <Menu menuItems={menuItems} setMenuItems={setMenuItems} />
      </div>
      <div className="save-button-container">
        <button className="save-button" onClick={saveData}><i className="fas fa-save"></i> Save Data</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
