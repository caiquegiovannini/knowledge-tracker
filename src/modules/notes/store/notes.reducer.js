import { ADD_NOTE } from './notes.actions.js';
/** @import { Action } from '../../../types/action.js' */

const initialState = { notes: [] };

/** 
 * @param {Action} action 
 */
function notesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            };
    
        default:
            break;
    }
}

export {
    notesReducer
}