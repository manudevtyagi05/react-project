import React from "react";

const NoteItem = ({ note, deleteNote }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md flex justify-between items-center">
      <p>{note.text}</p>
      <button
        onClick={() => deleteNote(note.id)}
        className="p-1 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
