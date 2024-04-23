// LoginForm.jsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './LoginForm.css'; // Importing CSS for styling

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Implement your authentication logic here
      console.log('Submitting:', username, password);
      router.push('/firstpage');
    };
  
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {/* <h2>Login</h2> */}
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button" >Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
