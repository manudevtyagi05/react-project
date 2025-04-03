import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet! Start adding some.</p>
      ) : (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
        ))
      )}
    </div>
  );
};

export default NoteList;
