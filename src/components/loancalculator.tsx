import React, { useState } from 'react';
import Header from './main/header';
import Footer from './main/footer';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const handleLoanCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform loan calculation logic here
    // You can calculate the monthly payment based on the loan amount, interest rate, and loan term
    const calculatedMonthlyPayment = calculateMonthlyPayment(parseFloat(loanAmount), parseFloat(interestRate), parseFloat(loanTerm));

    // Update the monthly payment state
    setMonthlyPayment(calculatedMonthlyPayment);
  };

  const calculateMonthlyPayment = (amount: number, rate: number, term: number) => {
    // Perform the loan calculation using the provided parameters
    // Replace this with your actual loan calculation logic
    const principal = amount;
    const interest = rate / 100 / 12;
    const payments = term * 12;

    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);

    return monthly.toFixed(2);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-5">Loan Calculator</h1>
        <form onSubmit={handleLoanCalculate}>
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
            <label className="form-label">Interest Rate (%):</label>
            <input
              type="number"
              className="form-control"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Loan Term (years):</label>
            <input
              type="number"
              className="form-control"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Calculate</button>
        </form>

        {monthlyPayment && (
          <div className="mt-3">
            <h2>Monthly Payment:</h2>
            <p>{monthlyPayment}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LoanCalculator;
