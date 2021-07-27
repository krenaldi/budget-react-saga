import React from 'react'
import EntryLine from './EntryLine';

function EntryLines({ entries, deleteEntry, editEntry }) {
  return (
    <div>
      {entries.map(entry => (
        <EntryLine
          deleteEntry={deleteEntry}
          key={entry.id}
          editEntry={editEntry}
          {...entry}
        />
      ))}
    </div>
  )
}

export default EntryLines
