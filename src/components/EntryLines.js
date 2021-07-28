import React from 'react'
import EntryLine from './EntryLine';

function EntryLines({ entries, editEntry }) {
  return (
    <div>
      {entries.map(entry => (
        <EntryLine
          key={entry.id}
          editEntry={editEntry}
          {...entry}
        />
      ))}
    </div>
  )
}

export default EntryLines
