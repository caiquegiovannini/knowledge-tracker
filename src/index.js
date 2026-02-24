import { createStore } from './app/store/create-store.js'
import { notesReducer } from './modules/notes/application/notes.reducer.js'
import { ADD_NOTE, UPDATE_NOTE } from './modules/notes/application/notes.actions.js';
import { getHistory } from './modules/notes/domain/note.entity.js';

const {
    getState,
    dispatch,
    subscribe,
} = createStore(notesReducer, { notes: [] })

// const unsubscribe = subscribe(() => console.log('Estado mudou: ', getState()))

// dispatch({type: ADD_NOTE, payload: 'Uma nota'})
// dispatch({type: ADD_NOTE, payload: 'Duas nota'})
// dispatch({type: ADD_NOTE, payload: 'Tres nota'})

// unsubscribe()

// dispatch({type: ADD_NOTE, payload: 'Quatro nota'})
dispatch({type: ADD_NOTE, payload: { note: {title: 'Nota teste', content: 'Conteudo da nota teste'}}});
const testNote = getState().notes[0];
dispatch({type: UPDATE_NOTE, payload: {previousNoteId: testNote.id, updatePayload: {content: 'Conteudo atalizado'}}});
const testNote1 = getState().notes[0];

// const testNoteUpdated2 = dispatch({type: UPDATE_NOTE, payload: {previousNote: testNoteUpdated1, updatedNote: {title: 'Teste v3'}}});
console.log(getHistory(testNote1))