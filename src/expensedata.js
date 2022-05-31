let expenses = [
    {
      name: "Bread",
      number: 1345,
      amount: "$10,800",
      due: "12/05/1995",
    },
    {
      name: "Milk",
      number: 2765,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      name: "Butter",
      number: 356,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "Toilet Paper",
      number: 545,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      name: "Wide Open Spaces",
      number: 1998,
      amount: "$4,600",
      due: "01/27/1998",
    },
  ];
  
  export function getExpenses() {
    return expenses;
  }

  export function getExpense(number) {
    return expenses.find(
      (expense) => expense.number === number
    );
  }