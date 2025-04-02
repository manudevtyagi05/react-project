const ExpenseItem = ({ index, expense, deleteExpense }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-semibold">
          ₹{expense.amount} - {expense.category}
        </p>
        <p className="text-sm text-gray-500">
          {expense.description || "No description"}
        </p>
        <p className="text-xs text-gray-400">{expense.date}</p>
      </div>
      <button
        onClick={() => deleteExpense(index)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
