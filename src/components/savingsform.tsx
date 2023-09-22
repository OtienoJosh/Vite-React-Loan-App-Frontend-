import React, { useState } from 'react';
import Header from './main/header';
import Footer from './main/footer';

const SavingsForm = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [depositAmount, setDepositAmount] = useState('');

  const handleSavingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form validation and submission logic here
    // You can make API calls or perform any necessary operations
    console.log('Savings Form Submitted:', accountNumber, depositAmount);

    // Reset the form fields after submission
    setAccountNumber('');
    setDepositAmount('');
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-5">Savings Account Deposit</h1>
        <form onSubmit={handleSavingsSubmit}>
          <div className="mb-3">
            <label htmlFor="accountNumber" className="form-label">
              Account Number:
            </label>
            <input
              type="text"
              id="accountNumber"
              className="form-control"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="depositAmount" className="form-label">
              Deposit Amount:
            </label>
            <input
              type="number"
              id="depositAmount"
              className="form-control"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SavingsForm;
