import { ADD_NOTE } from './notes.actions.js';
/** @import { Action } from '@/types/action.js' */
/** @import { Note } from 'notes/domain/note.types.js' */

/** @type {{notes: Note[]}} */
const initialState = { notes: [] };

/** 
 * @param {{notes: Note[]}} state
 * @param {Action<Note>} action 
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
            return state;
    }
}

export {
    notesReducer
}