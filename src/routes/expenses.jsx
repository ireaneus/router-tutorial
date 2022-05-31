import { NavLink, Outlet } from "react-router-dom";
import { getExpenses } from "../expensedata";

export default function Expenses() {
    let expenses = getExpenses();
    return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
      {expenses.map((expense) => (
          <NavLink 
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/expenses/${expense.number}`}
            key={expense.number}
            >
            {expense.name} : {expense.amount}
          </NavLink>
          ))}
      </nav>
      <Outlet />
      </div>
    );
  }