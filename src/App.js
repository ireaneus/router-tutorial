import { Outlet, Link } from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <div className="App">
      <h1 className="App-header" >Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          backgroundColor: "slategrey",
        }}
      >
        <Link className="App-link" to="/invoices">Invoices</Link> |{" "}
        <Link className="App-link" to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}