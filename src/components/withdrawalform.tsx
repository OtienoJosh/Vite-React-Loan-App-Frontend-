import React, { useState } from "react";
import Header from "./main/header";
import Footer from "./main/footer";

const WithdrawalForm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [withdrawalResult, setWithdrawalResult] = useState("");
  const [selectedOption, setSelectedOption] = useState("mpesa");

  const handleWithdrawalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form validation
    if (!accountNumber || !withdrawalAmount) {
      console.log("Please enter both account number and withdrawal amount.");
      return;
    }

    // Simulate M-Pesa and bank account withdrawal
    try {
      let withdrawalResult;
      if (selectedOption === "mpesa") {
        withdrawalResult = await simulateMpesaWithdrawal(withdrawalAmount);
      } else if (selectedOption === "bank") {
        withdrawalResult = await simulateBankAccountWithdrawal(
          withdrawalAmount,
          accountNumber
        );
      }

      console.log("Withdrawal Form Submitted:");
      console.log("Account Number:", accountNumber);
      console.log("Withdrawal Amount:", withdrawalAmount);
      console.log("Withdrawal Method:", selectedOption);
      console.log("Withdrawal Result:", withdrawalResult);

      // Set the withdrawal result
      setWithdrawalResult(withdrawalResult || "");


      // Reset the form fields after submission
      setAccountNumber("");
      setWithdrawalAmount("");
    } catch (error) {
      console.log("Withdrawal Error:", (error as Error).message);
      setWithdrawalResult(
        "An error occurred during withdrawal. Please try again."
      );
    }
  };

  // Simulate M-Pesa withdrawal
  const simulateMpesaWithdrawal = async (amount: string): Promise<string> => {
    // Replace this with your actual M-Pesa withdrawal logic
    // Perform the necessary operations for M-Pesa withdrawal, such as making an API call
    // Return the result of the withdrawal process
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`Withdrew ${amount} KES from M-Pesa`);
      }, 2000); // Simulating asynchronous operation
    });
  };

  // Simulate bank account withdrawal
  const simulateBankAccountWithdrawal = async (
    amount: string,
    accountNumber: string
  ): Promise<string> => {
    // Replace this with your actual bank account withdrawal logic
    // Perform the necessary operations for bank account withdrawal, such as making an API call
    // Return the result of the withdrawal process
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`Withdrew ${amount} KES from bank account ${accountNumber}`);
      }, 1500); // Simulating asynchronous operation
    });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-5">Withdrawal Request</h1>
        <form onSubmit={handleWithdrawalSubmit}>
          <div className="mb-3">
            <label htmlFor="accountNumber" className="form-label">
              Account Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="accountNumber"
              value={accountNumber || ""}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="withdrawalAmount" className="form-label">
              Withdrawal Amount:
            </label>
            <input
              type="number"
              className="form-control"
              id="withdrawalAmount"
              value={withdrawalAmount || ""}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="withdrawalMethod" className="form-label">
              Withdrawal Method:
            </label>
            <select
              className="form-control"
              id="withdrawalMethod"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="mpesa">M-Pesa</option>
              <option value="bank">Bank Account</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {withdrawalResult && (
          <div className="mt-3">
            <h4>Withdrawal Result:</h4>
            <p>{withdrawalResult}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WithdrawalForm;
