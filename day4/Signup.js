import React, { useState } from 'react';
import './signup.css';
function RegistrationPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inventoryManagement, setInventoryManagement] = useState(false);
  const [payrollManagement, setPayrollManagement] = useState(false);
  const [taxFields, setTaxFields] = useState(false);

  const handleRegistration = (event) => {
    event.preventDefault();

    // Perform registration logic or send data to the server

    // Clear form inputs
    setFullName('');
    setEmail('');
    setPassword('');
    setInventoryManagement(false);
    setPayrollManagement(false);
    setTaxFields(false);
  };

  return (
    <div className='signup-page'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Registration</h1>
          <form onSubmit={handleRegistration}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="inventoryManagement"
                checked={inventoryManagement}
                onChange={(e) => setInventoryManagement(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="inventoryManagement">
                Inventory Management
              </label>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="payrollManagement"
                checked={payrollManagement}
                onChange={(e) => setPayrollManagement(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="payrollManagement">
                Payroll Management
              </label>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="taxFields"
                checked={taxFields}
                onChange={(e) => setTaxFields(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="taxFields">
                Tax Fields
              </label>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default RegistrationPage;
