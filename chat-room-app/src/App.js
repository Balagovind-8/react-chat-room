// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import ChatRoom from './ChatRoom';
import RoomSelector from './RoomSelector';  // <-- Add this import here

function App() {
        return (
                <Router>
                        <Routes>
                                <Route path="/" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />
                                <Route path="/rooms" element={<RoomSelector />} /> {/* Room selector page */}
                                <Route path="/chat" element={<ChatRoom />} /> {/* Chat room page */}
                        </Routes>
                </Router>
        );
}

export default App;
