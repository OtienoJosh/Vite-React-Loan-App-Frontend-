import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from './main/header';
import Footer from './main/footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle login logic here
    // You can make API calls or perform any necessary operations
    console.log('Login:', email, password);
  };

  return (
    <div>
      <Header />
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{ width: "400px" }}>
          <h1 className="card-header text-center">Login</h1>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <div className="text-center mt-3">
                Don't have an account? <Link to="/signup">Sign Up</Link> {/* Link to the signup page */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
