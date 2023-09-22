import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from './main/header';
import Footer from './main/footer';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Handle signup logic here
    // You can make API calls or perform any necessary operations
    console.log('Signup:', name, email, password);
  };

  return (
    <div>
      <Header />
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{ width: '400px' }}>
          <h1 className="card-header text-center">Signup</h1>
          <div className="card-body">
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <div className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link> {/* Link to the login page */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
