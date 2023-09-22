import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import Header from './main/header';
import Footer from './main/footer';

// Create an Axios instance with the base URL for your backend
const api = axios.create({
  baseURL: 'http://localhost:3000', // Replace this with your actual backend URL
});

const LendingForm = () => {
  const [lenderName, setLenderName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanDuration, setLoanDuration] = useState('');

  const handleLendingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the form data to send to the backend
    const formData = {
      lenderName,
      loanAmount,
      interestRate,
      loanDuration,
    };

    // Send the form data to the backend using the api instance
    api.post('/lending', formData)
      .then((response) => {
        // Handle the response from the backend if needed
        console.log('Form submitted successfully!', response.data);

        // Reset the form fields after successful submission
        setLenderName('');
        setLoanAmount('');
        setInterestRate('');
        setLoanDuration('');
      })
      .catch((error) => {
        // Handle errors if necessary
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-5">Lending Application</h1>
        <form onSubmit={handleLendingSubmit}>
          <div className="mb-3">
            <label className="form-label">Lender Name:</label>
            <input
              type="text"
              className="form-control"
              value={lenderName}
              onChange={(e) => setLenderName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Loan Amount:</label>
            <input
              type="number"
              className="form-control"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Interest Rate:</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Loan Duration (in months):</label>
            <input
              type="number"
              className="form-control"
              value={loanDuration}
              onChange={(e) => setLoanDuration(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LendingForm;
