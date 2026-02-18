/** @import { Action } from '@/types/action.js' */

/**
 * @template S, P
 * @param {(state: S, action: Action<P>) => S} reducer 
 * @param {S} initialState 
 * @returns {{getState: () => S, dispatch: (action: Action<P>) => void, subscribe: (listener: () => void) => () => void}}
 */
function createStore(reducer, initialState) {
    let state = initialState;
    const listeners = new Set();

    function getState() {
        return state;
    }

    /** @param {S} newState */
    function setState(newState) {
        state = newState;
    }

    /**@param {Action<P>} action */
    function dispatch(action) {
        const updatedState = reducer(state, action);
        setState(updatedState);

        // para iterar sobre uma cópia de listeners e não muta-lo durante o loop
        const currentListeners = Array.from(listeners);
        currentListeners.forEach(listener => listener());
    }
    
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