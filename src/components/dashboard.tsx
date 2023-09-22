import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="display-4 text-center my-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Lending Application</h2>
              <Link to="/lending" className="btn btn-primary">Lending Application</Link>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Loan Calculator</h2>
              <Link to="/calculator" className="btn btn-primary">Loan Calculator</Link>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Loan Application</h2>
              <Link to="/application" className="btn btn-primary">Loan Application</Link>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Loan Repayment</h2>
              <Link to="/repayment" className="btn btn-primary">Loan Repayment</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Loan Results</h2>
              <Link to="/results" className="btn btn-primary">Loan Results</Link>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <Link to="/login" className="btn btn-primary">Login</Link>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Profile</h2>
              <Link to="/profile" className="btn btn-primary">Profile</Link>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Savings Account Deposit</h2>
              <Link to="/savings" className="btn btn-primary">Savings Account Deposit</Link>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Signup</h2>
              <Link to="/signup" className="btn btn-primary">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
