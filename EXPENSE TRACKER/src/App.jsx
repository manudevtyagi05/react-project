import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage on page load
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) setExpenses(storedExpenses);
  }, []);

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-5">Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
