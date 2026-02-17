import { createStore } from './app/store/create-store.js'
import { notesReducer } from './modules/notes/store/notes.reducer.js'

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

const log = () => console.log("mudou")

const unsub1 = subscribe(log)
const unsub2 = subscribe(log)

unsub1()

dispatch({ type: "ANY" })