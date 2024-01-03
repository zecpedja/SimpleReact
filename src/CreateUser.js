import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://your-backend-api/users', { username });
            setUsername('');
            alert('User created!');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
            />
            <button type="submit">Create User</button>
        </form>
    );
}

export default CreateUser;
