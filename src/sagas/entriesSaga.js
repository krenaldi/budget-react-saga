import { take, call, put, takeLatest } from 'redux-saga/effects';
import entriesTypes from '../actions/entries.actions';
import axios from 'axios';
import { populateEntries } from '../actions/entries.actions'

export function* getAllEntries(){
  yield take(entriesTypes.GET_ENTRIES);
  const { data } = yield call(axios, 'http://localhost:3001/entries');
  yield put(populateEntries(data));
}

export function* addEntrySaga(){
  yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDB);
}

function* addEntryToDB({payload}){
  // console.log('add entry', payload);
  yield call(addEntry, payload);
  yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload})
}

async function addEntry({id, description, value, isExpense}){
  await axios.post(`http://localhost:3001/entries`, {
    id, description, value, isExpense
  })
}

export function* deleteEntrySaga(){
  while(true){
    const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
    yield call(deleteEntry, payload.id)
    yield put({ type: 'REMOVE_ENTRY_RESULT', payload: {id: payload.id}})
  }
}

async function deleteEntry(id){
  await axios.delete(`http://localhost:3001/entries/${id}`)
}
