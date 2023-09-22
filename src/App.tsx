import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import SavingsForm from "./components/savingsform";
import RepaymentForm from "./components/repaymentform";
import WithdrawalForm from "./components/withdrawalform";
import LendingForm from "./components/lendingform";

import LoanCalculator from "./components/loancalculator";
import LoanResults from "./components/loanresults";
import Home from "./components/home";
import Dashboard from "./components/dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/savingsform" element={<SavingsForm />} />
        <Route path="/repaymentform" element={<RepaymentForm />} />
        <Route path="/withdrawalform" element={<WithdrawalForm />} />
        <Route path="/lendingform" element={<LendingForm />} />

        <Route path="/loancalculator" element={<LoanCalculator />} />
        <Route path="/loanresults" element={<LoanResults />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
