// src/RoomSelector.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function RoomSelector() {
    const [room, setRoom] = useState('');
    const navigate = useNavigate();

    const enterRoom = (e) => {
        e.preventDefault();
        if (room.trim()) {
            navigate(`/chat?room=${room}`);
        }
    };

    return (
        <div className="container">
            <h2>Select a Chat Room</h2>
            <form onSubmit={enterRoom}>
                <input
                    type="text"
                    placeholder="Enter room name"
                    onChange={(e) => setRoom(e.target.value)}
                />
                <button type="submit">Join Room</button>
            </form>
        </div>
    );
}

export default RoomSelector;
