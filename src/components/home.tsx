import React from "react";
import Header from './main/header';
import Footer from './main/footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <section
          className="mt-4"
          style={{
            background: "#f8f9fa",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2>Welcome to the Loan Web App</h2>
          <p>
            Apply for a loan with competitive interest rates, flexible repayment
            options, and a quick approval process. Our team of experts is
            dedicated to helping you find the best loan solution that suits your
            needs. Whether you need funds for home improvements, debt
            consolidation, or any other financial need, we have you covered. Our
            streamlined application process ensures a hassle-free experience,
            and our friendly customer support is here to assist you every step
            of the way.
          </p>
        </section>

        <section className="mt-4">
          <h3>Key Features</h3>
          <ul>
            <li>Competitive interest rates</li>
            <li>Quick approval process</li>
            <li>Flexible repayment options</li>
            <li>Personalized loan solutions</li>
          </ul>
        </section>

        <section className="mt-4">
          <h3>Testimonials</h3>
          <div className="testimonial-container">
            <div className="testimonial">
              <div className="testimonial-content">
                <img
                  className="testimonial-image rounded-circle"
                  src="testimonial1.jpg"
                  alt="Testimonial 1"
                />
                <p className="testimonial-text">
                  "The loan approval process was incredibly quick and
                  hassle-free. I needed funds for home renovations, and [Your
                  Company] provided me with a competitive interest rate. I'm
                  extremely satisfied with their service!"
                </p>
                <p className="testimonial-author">
                  <span className="testimonial-author-name">John Smith</span>,{" "}
                  <span className="testimonial-author-location">
                    New York, NY
                  </span>
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <img
                  className="testimonial-image rounded-circle"
                  src="testimonial2.jpg"
                  alt="Testimonial 2"
                />
                <p className="testimonial-text">
                  "I was impressed by the flexible repayment options offered by
                  [Your Company]. It allowed me to customize a repayment plan
                  that fit perfectly into my budget. Their customer service team
                  was also very helpful throughout the process."
                </p>
                <p className="testimonial-author">
                  <span className="testimonial-author-name">Sarah Johnson</span>
                  ,{" "}
                  <span className="testimonial-author-location">
                    Los Angeles, CA
                  </span>
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <img
                  className="testimonial-image rounded-circle"
                  src="testimonial3.jpg"
                  alt="Testimonial 3"
                />
                <p className="testimonial-text">
                  "I had a great experience getting a loan from [Your Company].
                  The online application was user-friendly, and their team
                  provided excellent support. Thanks to the loan, I was able to
                  consolidate my debts and improve my financial situation."
                </p>
                <p className="testimonial-author">
                  <span className="testimonial-author-name">
                    Michael Anderson
                  </span>
                  ,{" "}
                  <span className="testimonial-author-location">
                    Chicago, IL
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <h3>Security and Privacy</h3>
          <p>
            At [Your Company], we prioritize the security and privacy of your
            information. Rest assured that we employ advanced encryption and
            security measures to protect your personal and financial data
            throughout your loan application process.
          </p>
          <p>Our commitment to your privacy includes:</p>
          <ul>
            <li>
              Secure Data Handling: We have implemented strict protocols to
              ensure the secure handling and storage of your personal
              information. Our systems are regularly audited and monitored to
              maintain the highest level of security.
            </li>
            <li>
              Data Encryption: All data transmitted between your browser and our
              servers is encrypted using industry-standard SSL/TLS protocols.
              This ensures that your information remains confidential and
              protected from unauthorized access.
            </li>
            <li>
              Privacy Policy: Our comprehensive{" "}
              <a href="/privacy-policy">privacy policy</a> outlines the types of
              data we collect, how we use it, and the limited circumstances
              under which we may share it. We are committed to being transparent
              about our data practices and ensuring your rights and choices
              regarding your personal information.
            </li>
            <li>
              Secure Transactions: When making payments or submitting sensitive
              information, you can trust that our secure payment gateways and
              encryption technologies provide a safe environment for your
              transactions.
            </li>
            <li>
              Regulatory Compliance: We comply with applicable data protection
              laws and regulations to safeguard your privacy rights. We respect
              your preferences and always strive to handle your data in
              accordance with the relevant legal requirements.
            </li>
            <li>
              Customer Support: Our dedicated support team is available to
              address any questions or concerns you may have regarding the
              security and privacy of your information. We are here to assist
              you throughout the loan process.
            </li>
          </ul>
          <p>
            Your trust is of utmost importance to us, and we continuously invest
            in robust security measures to protect your data. If you have any
            inquiries or need further information, please don't hesitate to
            reach out to us.
          </p>
        </section>

        <section className="mt-4">
          <h3>Simple Application Process</h3>
          {/* Display a brief overview of the loan application process */}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
