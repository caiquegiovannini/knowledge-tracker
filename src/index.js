import { ADD_NOTE } from './action-type/notes.js'
import { createStore } from './store/notes.js'

const {
    getState,
    dispatch,
    subscribe
} = createStore({notes: []})

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