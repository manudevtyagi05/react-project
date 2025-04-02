import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md w-96 mt-5">
      <h2 className="text-xl font-semibold mb-3">Expense List</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses added yet.</p>
      ) : (
        expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            index={index}
            expense={expense}
            deleteExpense={deleteExpense}
          />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
