/** @import { Action } from '../../types/action.js' */

import { notesReducer } from '../reducer/notes.js';

function createStore(initialState = { notes: [] }) {
    let state = initialState;
    const listeners = new Set([]);

    function getState() {
        return state;
    }

    function setState(newState) {
        state = newState;
    }

    /**@param {Action} action */
    function dispatch(action) {
        const updatedState = notesReducer(state, action);
        setState(updatedState);

        // para iterar sobre uma cópia de listeners e não muta-lo durante o loop
        const currentListeners = [...listeners];
        currentListeners.forEach(listener => listener());
    }
    
    /**@param {() => void} listener */
    function subscribe(listener) {
        listeners.add(listener);

        return () => listeners.delete(listener)
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

export { createStore }