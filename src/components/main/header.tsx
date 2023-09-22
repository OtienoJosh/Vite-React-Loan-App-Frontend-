import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Loan Web App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lendingform">
                Lending
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/loancalculator">
                LoanCalculator
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/loanresults">
                LoanResults
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/withdrawalform">
                Withdraw Funds
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/savingsform">
                Savings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/repaymentform">
                Repayment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
          <a className="btn btn-primary ml-auto" href="#">
            Apply Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
