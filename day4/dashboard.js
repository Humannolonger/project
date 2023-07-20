import "./dashboard.css";
function Dash() {
  return (
    <>
      <header>
        <h1>Dashboard</h1>
      </header>
      <div className="header-card">
        <div className="card">
          <div className="card-header">
            <h2>Receivables</h2>
            <div>
              <p>View Report</p>
            </div>
          </div>
          <p>Amount that you've yet to receive from your customers</p>
          <hr />
          <p>
            Total unpaid invoices: <strong>₹0.00</strong>
          </p>
          <div className="card-bar"></div>
          <div className="card-details">
            <div>
              <p>Open</p>
              <p>₹0.00</p>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div>
              <p>Overdue</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>Payables</h2>
            <div>
              <p>View Report</p>
            </div>
          </div>
          <p>Amount that you've yet to pay to your vendors</p>
          <hr />
          <p>
            Total unpaid bills: <strong>₹0.00</strong>
          </p>
          <div className="card-bar"></div>
          <div className="card-details">
            <div>
              <p>Open</p>
              <p>₹0.00</p>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div>
              <p>Overdue</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dash;