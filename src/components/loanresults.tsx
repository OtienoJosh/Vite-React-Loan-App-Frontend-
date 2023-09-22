import Header from './main/header';
import Footer from './main/footer';

const LoanResults = () => {
  // Assuming you have some loan results data
  const loanResultsData = [
    { id: 1, amount: 1000, interestRate: 5, duration: 12 },
    { id: 2, amount: 2000, interestRate: 6, duration: 24 },
    { id: 3, amount: 3000, interestRate: 7, duration: 36 },
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-5">Loan Results</h1>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Loan Amount</th>
              <th>Interest Rate</th>
              <th>Duration (months)</th>
            </tr>
          </thead>
          <tbody>
            {loanResultsData.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>${loan.amount}</td>
                <td>{loan.interestRate}%</td>
                <td>{loan.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default LoanResults;
