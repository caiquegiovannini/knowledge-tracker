import { createStore } from './app/store/create-store.js'
import { notesReducer } from './modules/notes/store/notes.reducer.js'
import { createNote, updateNote } from './modules/notes/domain/note.entity.js'

const {
    getState,
    dispatch,
    subscribe
} = createStore(notesReducer, { notes: [] })

// const unsubscribe = subscribe(() => console.log('Estado mudou: ', getState()))

// dispatch({type: ADD_NOTE, payload: 'Uma nota'})
// dispatch({type: ADD_NOTE, payload: 'Duas nota'})
// dispatch({type: ADD_NOTE, payload: 'Tres nota'})

// unsubscribe()

// dispatch({type: ADD_NOTE, payload: 'Quatro nota'})
const testNote = createNote({title: 'Nota teste', content: 'Conteudo da nota teste'})
const testUpdatedNote = updateNote(testNote, {content: 'Conteudo atalizado'})
console.log(testUpdatedNote)