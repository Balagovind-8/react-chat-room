// src/ChatRoom.js
import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import {
    collection,
    addDoc,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy,
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './App.css';

function ChatRoom() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const room = searchParams.get('room') || 'general';

    useEffect(() => {
        const q = query(
            collection(db, `rooms/${room}/messages`),
            orderBy('timestamp')
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, [room]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (message.trim()) {
            await addDoc(collection(db, `rooms/${room}/messages`), {
                text: message,
                user: auth.currentUser.email,
                timestamp: serverTimestamp(),
            });
            setMessage('');
        }
    };

    const handleLogout = () => {
        signOut(auth);
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Chat Room: {room}</h2>
            <button onClick={handleLogout}>Logout</button>
            <div className="messages">
                {messages.map((msg) => (
                    <div key={msg.id} className="message">
                        <strong>{msg.user}</strong>: {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatRoom;
