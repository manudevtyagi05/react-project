import { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !date) return alert("Please enter amount and date!");

    addExpense({ amount, category, description, date });
    setAmount("");
    setCategory("Food");
    setDescription("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-lg shadow-md w-96"
    >
      <h2 className="text-xl font-semibold mb-3">Add Expense</h2>

      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 w-full rounded"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
