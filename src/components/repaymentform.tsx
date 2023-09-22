import React, { useState } from 'react';
import Header from './main/header';
import Footer from './main/footer';

const RepaymentForm = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleRepaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form validation and submission logic here
    // You can make API calls or perform any necessary operations

    if (paymentMethod === 'bank') {
      // Handle bank repayment logic
      console.log('Bank Repayment:', accountNumber, paymentAmount);
    } else if (paymentMethod === 'mpesa') {
      // Handle M-Pesa repayment logic
      console.log('M-Pesa Repayment:', accountNumber, paymentAmount);
    }

    // Reset the form fields after submission
    setAccountNumber('');
    setPaymentAmount('');
    setPaymentMethod('');
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-5">Loan Repayment</h1>
        <form onSubmit={handleRepaymentSubmit}>
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
            <label htmlFor="paymentAmount" className="form-label">
              Payment Amount:
            </label>
            <input
              type="number"
              id="paymentAmount"
              className="form-control"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">
              Payment Method:
            </label>
            <select
              id="paymentMethod"
              className="form-select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select Payment Method</option>
              <option value="bank">Bank</option>
              <option value="mpesa">M-Pesa</option>
            </select>
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

export default RepaymentForm;
