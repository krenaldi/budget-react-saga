import React from 'react'
import EntryLine from './EntryLine';

function EntryLines({ entries }) {
  return (
    <div>
      {entries.map(entry => (
        <EntryLine
          key={entry.id}
          {...entry}
        />
      ))}
    </div>
  )
}

export default EntryLines
