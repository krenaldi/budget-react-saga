const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case 'ADD_ENTRY':
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case 'REMOVE_ENTRY':
      newEntries = state.filter(entry => entry.id !== action.payload.id);
      return newEntries;
    case 'UPDATE_ENTRY':
      newEntries = [...state];
      const index = newEntries.findIndex(entry => entry.id === action.payload.id);
      newEntries[index] = {...action.payload.entry};
      return newEntries;
    default:
      return state;
  }
}
export default reducer;

const initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1500.00,
    isExpense: false
  },
  {
    id: 2,
    description: 'Cable bill',
    value: 200.00,
    isExpense: true
  },
  {
    id: 3,
    description: 'Mortgage',
    value: 1700.00,
    isExpense: true
  },
  {
    id: 4,
    description: 'Poker winnings',
    value: 170.00,
    isExpense: false
  },
]