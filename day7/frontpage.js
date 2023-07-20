import React from 'react';
import './frontpage.css';

const FrontPage = () => {
  return (
    <div className="container">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Navigation menu */}
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="container text-center">
            <h1>Welcome to our Accounting Website</h1>
            <p>Focus on your business and leave the accounting to us.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <h2>Our Services</h2>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Bookkeeping</h3>
                    <p className="card-text">Accurately track your financial transactions with our bookkeeping services.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Tax Preparation</h3>
                    <p className="card-text">Maximize your tax savings with our expert tax preparation services.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Financial Consulting</h3>
                    <p className="card-text">Get strategic financial guidance to help your business thrive.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="container text-center">
            <h2>Ready to streamline your finances?</h2>
            <button className="btn btn-primary">Contact Us</button>
          </div>
          
        </section>
      </main>
      <footer className="footer bg-light">
        <div className="container text-center">
          <div className="copy">© Accounting</div>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
          </div>
          <div class="links">
              <span>Social Links</span>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;
