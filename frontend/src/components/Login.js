import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // if using React Router

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form submission

        try {
            // Send login request to backend
            const response = await axios.post('/login', { username, password });

            // Save the token to localStorage
            localStorage.setItem('jwtToken', response.data.token);

            // Save user data to manage UI roles
            const userData = {
                userId: response.data.user.userId,
                role: response.data.user.role,
            };
            localStorage.setItem('userData', JSON.stringify(userData));

            // Redirect to the dashboard or protected page
            history.push('/dashboard'); // Or use window.location.href = '/dashboard';

        } catch (error) {
            console.error('Login failed:', error);
            // Handle error (show message, etc.)
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
